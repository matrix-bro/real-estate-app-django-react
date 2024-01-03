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
        serializer = ContactSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        first_name = serializer.validated_data['first_name']
        last_name = serializer.validated_data['last_name']
        email = serializer.validated_data['email']
        subject = serializer.validated_data['subject']
        message = serializer.validated_data['message']

        try:
            # Making a bit nice format message
            msg = f"Full Name: {first_name} {last_name}\n"
            msg += f"Email: {email}\n\n"
            msg += f"Message: {message}"

            # subject, message, from_email, recipient_list, fail_silently
            send_mail(
                subject,
                msg,
                email,
                ['admin@gmail.com', 'other@gmail.com'],
                fail_silently=False
            )

            contact = Contact(first_name=first_name, last_name=last_name, email=email, subject=subject, message=message)
            contact.save()

            return Response({
                'success': 'Message sent successfully'
            })
        except:
            return Response({
                'error': 'Message failed to send'
            })