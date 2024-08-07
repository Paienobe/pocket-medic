from rest_framework import serializers
from .models import User


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
