from django.urls import path
from .views import SpotifyToken
urlpatterns = [
    path('login/', SpotifyToken.as_view())
]