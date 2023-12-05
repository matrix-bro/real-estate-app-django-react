from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from app.services.account_services import user_sign_up

class SignUpView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        user = user_sign_up(data['first_name'], data['last_name'], data['email'], data['password'], data['password2'])

        return Response({
            'success': 'User created successfully',
            'data':{
                'full_name': user.get_full_name(),
                'email': user.email,
            }
        })