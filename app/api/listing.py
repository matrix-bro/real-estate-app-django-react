from rest_framework import serializers
from app.models.listing import Listing
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('title', 'address', 'city', 'state', 'price', 'sale_type', 'home_type', 'bedrooms', 'bathrooms', 'sqft', 'photo_main', 'slug')

class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'

class ListingView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = ListingSerializer

class ListingDetailView(RetrieveAPIView):
    queryset = Listing.objects.filter(is_published=True)
    serializer_class = ListingDetailSerializer
    lookup_field = 'slug'

class SearchListingsView(APIView):
    permission_classes = (permissions.AllowAny, )

    """
        POST: Search using following filters
        - sale_type, price, bedrooms, home_type, bathrooms, sqft, days_passed(days_listed), photos, open_house, keywords
    """
    def post(self, request, format=None):
        data = self.request.data

        queryset = Listing.objects.order_by('-list_date').filter(is_published=True)

        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)

        # TODO: other filters

        serializer = ListingSerializer(queryset, many=True)

        return Response(serializer.data)  