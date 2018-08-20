from rest_framework import serializers
from .models import Stock, Tribe

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        # Model that is being serialized
        model = Stock
        # Fields that will be transferred
        # fields = ('')
        fields = '__all__'

class TribeSerializer(serializers.ModelSerializer):
    class Meta:
        # Model that is being serialized
        model = Tribe
        fields = '__all__'
