from django.http import HttpResponse
from django.urls import path
from . import views

urlpatterns = [
    path('', lambda request: HttpResponse("API is working")),
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('categories/<int:id>/products/', views.ProductsByCategory.as_view()),
]
