from django.contrib import admin
from app.models.realtor import Realtor
from django.contrib.auth import get_user_model
User = get_user_model()

admin.site.register(User)

class RealtorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'date_hired',)
    list_display_links = ('id', 'name')
    search_fields = ('name',)
    list_per_page = 25

admin.site.register(Realtor, RealtorAdmin)    