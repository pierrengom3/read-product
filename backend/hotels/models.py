from django.db import models

class Hotel(models.Model):
    DEVISE_CHOICES = [
        ('XOF', 'F XOF'),
        ('EUR', 'Euro'),
        ('USD', 'Dollar'),
    ]

    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=3, choices=DEVISE_CHOICES, default='XOF')
    photo = models.ImageField(upload_to='hotels/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name