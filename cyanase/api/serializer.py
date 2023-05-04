from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import UserProfile
from rest_framework.validators import UniqueValidator

class RegisterUserSerializer(serializers.ModelSerializer):
    profile = UserProfile(many=False)
    
    class Meta:
        model =  User
        fields = ('email', 'password', 'username', 'first_name', 'last_name', 'profile')
        
    def create(self, validated_data):
        api_user = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'], # if you dont validate, you wont store anything in the database
            email=validated_data['email'],
            password=validated_data['password']
        )
        api_user.save()
        return api_user