from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.utils import timezone
from .models import Post

# Create your views here.

def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'perfitweb/post_list.html', {'posts': posts})
# class HomePageView(TemplateView):
# 	posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date');
# 	def get(self, request, **kwargs):
# 			return render(request, 'post_list.html', {'posts': posts})

# # Add this view
# class AboutPageView(TemplateView):
#     template_name = "about.html"