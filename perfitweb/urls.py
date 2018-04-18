# perfitweb/urls.py
from django.conf.urls import url
from perfitweb import views
from django.urls import path, include

urlpatterns = [
    path('',views.post_list, name='post_list'),
    # path('', views.HomePageView.as_view()),
    # path('about/', views.AboutPageView.as_view()),
    path('accounts/', include('django.contrib.auth.urls')),
    # url(r'^$', views.HomePageView.as_view()),
    # url(r'^about/$', views.AboutPageView.as_view()),
    #path('', views.index, name='index'),
]

#Add Django site authentication urls (for login, logout, password management)
    