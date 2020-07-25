from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


# Register
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': { 'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'])
        return user


# Login
class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': { 'write_only': True}}

    def validate(self, data):
        user = authenticate(**data)
        if(user and user.is_active):
            return user
        else:
            raise serializers.ValidationError("Credenciales Incorrectas")
