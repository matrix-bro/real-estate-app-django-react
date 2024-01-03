from rest_framework import serializers
from app.models.contact import Contact
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from django.core.mail import send_mail

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        try:
            # Making a bit nice format message
            msg = f"Full Name: {data['first_name']} {data['last_name']}\n"
            msg += f"Email: {data['email']}\n\n"
            msg += f"Message: {data['message']}"

            # subject, message, from_email, recipient_list, fail_silently
            send_mail(
                data['subject'],
                msg,
                data['email'],
                ['admin@gmail.com', 'other@gmail.com'],
                fail_silently=False
            )

            contact = Contact(first_name=data['first_name'], last_name=data['last_name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()

            return Response({
                'success': 'Message sent successfully'
            })
        except:
            return Response({
                'error': 'Message failed to send'
            })