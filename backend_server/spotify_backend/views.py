from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from spotipy.oauth2 import SpotifyOAuth
import environ

env = environ.Env()
environ.Env.read_env()
# Create your views here.

auth_token = SpotifyOAuth(client_id=env('CLIENT_ID'), client_secret=env('CLIENT_SECRET'), redirect_uri="http://localhost:3000/")



class SpotifyToken(APIView):
    def post(self, request):
        if request.method == 'POST' and request.data.get('code'):
            code = request.data.get('code')
            token_data = auth_token.get_access_token(code=code, as_dict=True, check_cache=False)
            return Response(token_data)
        else:
            return Response({"error":"only post request accepted"})


