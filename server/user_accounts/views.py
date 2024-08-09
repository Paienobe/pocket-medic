from rest_framework.generics import GenericAPIView
from .serializers import RegistrationSerializer, LoginSerializer, LogoutSerializer
from rest_framework.response import Response
from .models import User
from rest_framework import status


class RegisterUserView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            user = serializer.data
            user_instance = User.objects.get(pk=user["id"])
            user_tokens = user_instance.tokens()

            return Response({
                "user": user,
                "access_token": user_tokens["access"],
                "refresh_token": user_tokens["refresh"]
            })


class LoginView(GenericAPIView):
    permission_classes = []
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)


class LogoutView(GenericAPIView):
    serializer_class = LogoutSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
