from rest_framework.generics import GenericAPIView
from .serializers import RegistrationSerializer
from rest_framework.response import Response
from .models import User


class RegisterUserView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            user = serializer.data.get("user")
            user_instance = User.objects.get(pk=user["id"])
            user_tokens = user_instance.tokens()

            return Response({
                "user": user,
                "access_token": user_tokens["access"],
                "refresh_token": user_tokens["refresh"]
            })
