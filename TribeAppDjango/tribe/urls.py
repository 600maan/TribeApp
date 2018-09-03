

from django.conf.urls import url, include
from . import views

app_name = 'tribe'

urlpatterns = [
    # /tribeapp/userlogin
    url(r'^userlogin/', views.UserLoginView.as_view(), name="userlogin"),
    # /tribeapp/register
    url(r'^register/', views.UserFormView.as_view(), name="register"),
    # /tribeapp/index
    url(r'^index/', views.IndexView.as_view(), name="index"),
    # /tribeapp/create
    url(r'^create/', views.CreateView.as_view(), name="create"),
    # /tribeapp/list
    url(r'^list/', views.ListTribesView.as_view(), name="list"),
    # /tribeapp/mylist
    url(r'^mylist/', views.ListMyTribesView.as_view(), name="mylist"),

    url(r'^tribeslist/$', views.TribeList.as_view()),
    url(r'^mytribeslist/$', views.MyTribeList.as_view()),
    url(r'^tribedetail/(?P<pk>[0-9]+)/$', views.TribeDetail.as_view()),
]
