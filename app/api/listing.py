from rest_framework import serializers
from app.models.listing import Listing
from rest_framework.generics import ListAPIView
from rest_framework import permissions

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('title', 'address', 'city', 'state', 'price', 'sale_type', 'home_type', 'bedrooms', 'bathrooms', 'sqft', 'photo_main', 'slug')

class ListingView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = ListingSerializer
