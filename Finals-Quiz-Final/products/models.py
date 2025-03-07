from django.db import models
from django.contrib.auth.models import User  # Import the built-in User model
import uuid

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')  # Link to the User model
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='product_images/')  # You can change the upload path if needed
    brand = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField()
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0)  # Example: 4.5 stars
    numReviews = models.PositiveIntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Example: 99.99
    stock = models.IntegerField(default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)  # Unique identifier for each product

    def __str__(self):
        return self.name
