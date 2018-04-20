# perfitweb/urls.py
from django.conf.urls import url
from perfitweb import views
from django.urls import path, include
from django.contrib.auth import views as views_auth

urlpatterns = [
    path('',views.post_list, name='post_list'),
    url(r'^post/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    url(r'^post/new/$', views.post_new, name='post_new'),
    url(r'^post/(?P<pk>\d+)/edit/$', views.post_edit, name='post_edit'),
    url(r'^accounts/login/$', views_auth.login, name='login'),
     url(r'^accounts/logout/$', views_auth.logout, name='logout', kwargs={'next_page': '/'}),
    # path('', views.HomePageView.as_view()),
    # path('about/', views.AboutPageView.as_view()),
    path('accounts/', include('django.contrib.auth.urls')),
    # url(r'^$', views.HomePageView.as_view()),
    # url(r'^about/$', views.AboutPageView.as_view()),
    #path('', views.index, name='index'),
]

#Add Django site authentication urls (for login, logout, password management)
    