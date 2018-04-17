# perfitweb/urls.py
from django.conf.urls import url
from perfitweb import views
from django.urls import path

urlpatterns = [
    path('', views.HomePageView.as_view()),
    path('about/', views.AboutPageView.as_view()),
    # url(r'^$', views.HomePageView.as_view()),
    # url(r'^about/$', views.AboutPageView.as_view()),
    #path('', views.index, name='index'),
]