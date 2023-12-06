from rest_framework import serializers
from app.models.realtor import Realtor
from rest_framework.generics import ListAPIView
from rest_framework import permissions

class RealtorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realtor
        fields = '__all__'

class RealtorListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    pagination_class = None
            