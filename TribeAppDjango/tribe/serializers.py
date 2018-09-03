from rest_framework import serializers
from .models import Tribe

class TribeSerializer(serializers.ModelSerializer):
    class Meta:
        # Model that is being serialized
        model = Tribe
        fields = '__all__'
