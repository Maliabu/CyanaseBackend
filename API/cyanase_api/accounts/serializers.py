from rest_framework import serializers
from accounts.models import User

class RegisterAPIUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model =  User
        fields = ('email', 'moa', 'coi')
        
    def create(self, validated_data):
        api_user = User.objects.create(
            moa=validated_data['moa'],
            email=validated_data['email'],
            coi=validated_data['coi']
        )
        api_user.save()
        return api_user