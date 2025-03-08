from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ProductCreateView

# Use a router for the viewset
router = DefaultRouter()
router.register(r'', ProductViewSet)  # Registers /api/products/

urlpatterns = [
    path('create/', ProductCreateView.as_view(), name='product-create'),  # POST for new products
    path('', include(router.urls)),  # Automatically includes list/retrieve/update/delete routes
]
