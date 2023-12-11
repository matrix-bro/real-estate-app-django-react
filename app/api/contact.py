from rest_framework import serializers
from app.models.contact import Contact
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        try:
            # send mail here

            contact = Contact(first_name=data['first_name'], last_name=data['last_name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()

            return Response({
                'success': 'Message sent successfully'
            })
        except:
            return Response({
                'error': 'Message failed to send'
            })