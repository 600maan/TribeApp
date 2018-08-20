from django.db import models

class Tribe(models.Model):
    tribe_name = models.CharField(max_length=50)
    tribe_description = models.CharField(max_length=250)
    tribe_location = models.CharField(max_length=250)
    tribe_member_count = models.IntegerField()
    tribe_tags = models.CharField(max_length=250)

    def __str__(self):
        return self.tribe_name