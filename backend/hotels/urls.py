from django.urls import path
from .views import HotelListCreateView, HotelDetailView

urlpatterns = [
    path('', HotelListCreateView.as_view(), name='hotel-list-create'),
    path('<int:pk>/', HotelDetailView.as_view(), name='hotel-detail'),
]