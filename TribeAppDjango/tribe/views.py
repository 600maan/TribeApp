from django.views import generic
from .models import Tribe
from .serializers import TribeSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View
from .forms import UserForm
from django.views.decorators.csrf import csrf_exempt

class UserFormView(APIView):
    form_class = UserForm
    template_name = 'tribe/home.html'
    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form' : form})

    def post(self, request):
        form = UserForm(request.POST)
        user = form.save(commit=False)
        username = form.data['username']
        email = form.data['email']
        password = form.data['password']
        user.set_password(password)
        user.save()
        user = authenticate(username=username, email=email, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return Response({'signup': 'success'})
        return Response({'signup': 'failure'})

class UserLoginView(APIView):
    form_class = UserForm
    def post(self, request):
        form = UserForm(request.POST)
        username1 = form.data['username']
        email1 = form.data['email']
        password1 = form.data['password']
        user = authenticate(username=username1, email=email1, password=password1)
        if user is not None:
            if user.is_active:
                login(request, user)
                return Response({'login': 'success'})
        return Response({'login': 'failure'})

class IndexView(generic.ListView):
    template_name = 'tribe/home.html'
    def get_queryset(self):
        return ""

class CreateView(generic.ListView):
    template_name = 'tribe/Create.html'
    def get_queryset(self):
        return ""

class ListTribesView(generic.ListView):
    template_name = 'tribe/Tribelist.html'
    def get_queryset(self):
        return ""

class ListMyTribesView(generic.ListView):
    template_name = 'tribe/MyTribeList.html'
    def get_queryset(self):
        return ""
# List all tribes or create a new tribe
# tribes/
class TribeList(APIView):
    def get(self, request):
        tribes = Tribe.objects.all()
        serializer = TribeSerializer(tribes, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TribeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MyTribeList(APIView):
    def get(self, request):
        # Find my tribes
        tribes = Tribe.objects.filter(tribe_owner_id=request.user.id)
        serializer = TribeSerializer(tribes, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        pass

class TribeDetail(APIView):
    def get_object(self, pk):
        try:
            return Tribe.objects.get(pk=pk)
        except Tribe.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        tribe = self.get_object(pk)
        serializer = TribeSerializer(tribe)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        tribe = self.get_object(pk)
        serializer = TribeSerializer(tribe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        tribe = self.get_object(pk)
        tribe.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

