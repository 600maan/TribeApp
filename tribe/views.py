from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.views import generic
from .models import Tribe
from .serializers import TribeSerializer


class IndexView(generic.ListView):
    template_name = 'tribe/index.html'
    def get_queryset(self):
        return ""


# List all tribes or create a new tribe
# tribes/
class TribeList(APIView):
    def get(self, request):
        tribes = Tribe.objects.all()
        serializer = TribeSerializer(tribes, many=True)
        return Response(serializer.data)

    def post(self):
        pass