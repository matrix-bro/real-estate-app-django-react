from django.urls import path
from app.api import account, realtor

urlpatterns = [
    # account
    path('signup/', account.SignUpView.as_view(), name='signup'),
    
    # realtor
    path('realtors/', realtor.RealtorListView.as_view(), name='realtors'),

    
]