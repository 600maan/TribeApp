from django.db import models
from django.contrib.auth.models import User

class Tribe(models.Model):
    tribe_name = models.CharField(max_length=50)
    tribe_description = models.CharField(max_length=250)
    tribe_location = models.CharField(max_length=250)
    tribe_member_count = models.IntegerField()
    tribe_tags = models.CharField(max_length=250)
    tribe_logo = models.FileField(null=True)
    tribe_owner = models.ForeignKey('auth.User', related_name='tribes', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.tribe_name