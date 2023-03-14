from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse 
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User

from rest_framework import generics
from accounts.serializers import RegisterAPIUserSerializer


# register your primary user
class RegisterAPIUser(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = RegisterAPIUserSerializer
    def post(self, request, format=None):
        self.http_method_names.append("GET")
        serializer = RegisterAPIUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, format=None):
        serializer = RegisterAPIUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
