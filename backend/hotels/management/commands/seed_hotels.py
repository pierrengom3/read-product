from django.core.management.base import BaseCommand
from hotels.models import Hotel

HOTELS_DATA = [
    {
        "name": "Hôtel Terrou-Bi",
        "address": "Boulevard Martin Luther King, Dakar, 11500",
        "price_per_night": 25000,
        "currency": "XOF",
        "photo_url": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
        "name": "King Fahd Palace",
        "address": "Rte des Almadies, Dakar",
        "price_per_night": 20000,
        "currency": "XOF",
        "photo_url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    {
        "name": "Radisson Blu Hotel",
        "address": "Rte de la Corniche O, Dakar 16868",
        "price_per_night": 22000,
        "currency": "XOF",
        "photo_url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
        "name": "Pullman Dakar Teranga",
        "address": "Place de l'Indépendance, 10 Rue FL 29, Dakar",
        "price_per_night": 30000,
        "currency": "XOF",
        "photo_url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    {
        "name": "Hôtel Lac Rose",
        "address": "Lac Rose, Dakar",
        "price_per_night": 25000,
        "currency": "XOF",
        "photo_url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    {
        "name": "Hôtel Saly",
        "address": "Mbour, Sénégal",
        "price_per_night": 20000,
        "currency": "XOF",
        "photo_url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    {
        "name": "Palm Beach Resort & Spa",
        "address": "BP64, Saly 23000",
        "price_per_night": 22000,
        "currency": "XOF",
        "photo_url": "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    },
]

class Command(BaseCommand):
    help = "Seed la base avec les hôtels de démo"

    def handle(self, *args, **kwargs):
        for data in HOTELS_DATA:
            hotel, created = Hotel.objects.get_or_create(
                name=data["name"],
                defaults={
                    "address": data["address"],
                    "price_per_night": data["price_per_night"],
                    "currency": data["currency"],
                    "photo": data["photo_url"],
                },
            )
            status = "créé" if created else "déjà existant"
            self.stdout.write(self.style.SUCCESS(f"{hotel.name} — {status}"))