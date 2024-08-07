from django.urls import path
from .views import RegisterUserView, LoginView, LogoutView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register_user"),
    path("login/", LoginView.as_view(), name="login_user"),
    path("logout/", LogoutView.as_view(), name="logout_user"),
    path("token_refresh/", TokenRefreshView.as_view(), name="refresh_token"),
]
