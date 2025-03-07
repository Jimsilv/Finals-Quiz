from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse  # Import JsonResponse

# Define a simple API home response
def home(request):
    return JsonResponse({"message": "Welcome to the API!"})

urlpatterns = [
    path("", home),  # ✅ Add this to handle requests to "/"
    path("admin/", admin.site.urls),
    path("api/accounts/", include("accounts.urls")),  # Accounts API
    path("api/products/", include("products.urls")),  # Products API
]

# Serve media files during development
from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
