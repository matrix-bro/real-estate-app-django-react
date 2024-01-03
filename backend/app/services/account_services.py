from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework import serializers

def user_sign_up(first_name, last_name, email, password, password2):
    if password != password2:
        raise serializers.ValidationError({
            'error': 'Passwords do not match'
        })
    
    if User.objects.filter(email=email).exists():
        raise serializers.ValidationError({
            'error': 'Email already exists'
        })
    
    if len(password) < 6:
        raise serializers.ValidationError({
            'error': 'Passwords must be at least 6 characters'
        })
    
    user = User.objects.create_user(first_name=first_name, last_name=last_name, email=email, password=password)

    return user
    