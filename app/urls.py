from django.urls import path
from app.api.account import SignUpView

urlpatterns = [
    # account
    path('signup/', SignUpView.as_view(), name='signup'),
    
]