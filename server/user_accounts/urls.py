from django.urls import path
from .views import RegisterUserView, LoginView, LogoutView

urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register_user"),
    path("login/", LoginView.as_view(), name="login_user"),
    path("logout/", LogoutView.as_view(), name="logout_user"),
]
