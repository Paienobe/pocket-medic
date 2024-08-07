from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ["id", "first_name", "last_name",
                  "email", "is_doctor", "is_patient", "password"]
        read_only_fields = ["id"]


class RegistrationSerializer(serializers.Serializer):
    user = UserSerializer()
    password2 = serializers.CharField(
        max_length=68, min_length=6, write_only=True)

    class Meta:
        fields = ["user",  "password2"]

    def validate(self, attrs):
        password = attrs.get("user").get("password")
        password2 = attrs.get("password2")
        if password != password2:
            raise serializers.ValidationError("Passwords do not match!")
        return attrs

    def create(self, validated_data):
        password2 = validated_data.pop("password2")
        user_data = validated_data.get("user")
        user = User.objects.create_user(**user_data)
        return {"user": user}


class LoginSerializer(serializers.Serializer):
    user = UserSerializer(read_only=True)
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(
        write_only=True, max_length=68, min_length=6)
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(read_only=True)

    class Meta:
        fields = ["user", "email", "password", "access_token", "refresh_token"]

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        request = self.context.get("request")
        user = authenticate(request, email=email, password=password)
        if not user:
            raise AuthenticationFailed(
                "Invalid credentials. Please try again!")
        user_tokens = user.tokens()
        return {
            "user": user,
            "access_token": user_tokens.get("access"),
            "refresh_token": user_tokens.get("refresh")
        }


class LogoutSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()
    default_error_message = {"bad_token": ("Token is invalid or has expired!")}

    def validate(self, attrs):
        self.token = attrs.get("refresh_token")
        return attrs

    def save(self, **kwargs):
        try:
            token = RefreshToken(self.token)
            token.blacklist()
        except TokenError:
            return self.fail("bad_token")
