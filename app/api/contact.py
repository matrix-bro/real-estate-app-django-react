from rest_framework import serializers
from app.models.contact import Contact
from rest_framework.views import APIView
from rest_framework import permissions

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        pass    