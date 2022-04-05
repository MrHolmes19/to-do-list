from django.core.management.base import BaseCommand, CommandError
from core.models import *

class Command(BaseCommand):
    
    help = 'populate the database with some samples'

    def handle(self, *args, **kwargs):
        try:
            users = User.objects.bulk_create([
                    User(name = "leandro"),
                    User(name = "hernan"),
                    User(name = "shinji")                                   
            ])
            folders = Folder.objects.bulk_create([
                    Folder(name = "work staff", creator = 1),
                    Folder(name = "health", creator = 1),
                    Folder(name = "holidays", creator = 1),
                    Folder(name = "home", creator = 2),
                    Folder(name = "work", creator = 2),
                    Folder(name = "japanese class", creator = 3),
                    Folder(name = "battery class", creator = 3),                                
            ])
            tasks = Task.objects.bulk_create([
                    Task(name = "deliver features", folder = 1),
                    Task(name = "deploy project", folder = 1),
                    Task(name = "meeting at 15", folder = 1),
                    Task(name = "go to dentist", folder = 2),
                    Task(name = "ask for appointment", folder = 2),
                    Task(name = "buy medicine at the pharmacy", folder = 2),
                    Task(name = "book hotel", folder = 3),
                    Task(name = "clean and wipe", folder = 4),
                    Task(name = "paint walls", folder = 4),
                    Task(name = "ask for a raise", folder = 5),
                    Task(name = "app integration", folder = 5),
                    Task(name = "study hard", folder = 6),
                    Task(name = "learn ideograms", folder = 6),
            ])
        except:
            raise CommandError('Error while trying to populate database')