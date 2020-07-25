from django.urls import path, include
from .views import Registro, Login, User
from knox import views as knox_views

urlpatterns = [
    path("api/auth", include('knox.urls')),
    path('api/auth/register', Registro.as_view()),
    path('api/auth/login', Login.as_view()),
    path('api/auth/user', User.as_view()),
    path('api/auth/logout',
         knox_views.LogoutView.as_view(),
         name='knox-logout')
]