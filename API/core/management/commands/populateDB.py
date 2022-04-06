from django.core.management.base import BaseCommand, CommandError
from core.models import *

class Command(BaseCommand):
    
    help = 'populate the database with some samples'

    def handle(self, *args, **kwargs):
        print("creating users")
        try:
            users = User.objects.bulk_create([
                    User(name = "leandro"),
                    User(name = "hernan"),
                    User(name = "shinji")                                   
            ])
        except:
            raise CommandError('Error while trying to populate database with users')

        print("creating folders")
        try:
            folders = Folder.objects.bulk_create([
                    Folder(name = "work staff", creator_id = 1),
                    Folder(name = "health", creator_id = 1),
                    Folder(name = "holidays", creator_id = 1),
                    Folder(name = "home", creator_id = 2),
                    Folder(name = "work", creator_id = 2),
                    Folder(name = "japanese class", creator_id = 3),
                    Folder(name = "battery class", creator_id = 3),                                
            ])
        except:
            raise CommandError('Error while trying to populate database with folders')

        print("creating tasks")
        try:
            tasks = Task.objects.bulk_create([
                    Task(name = "deliver features", folder_id = 1),
                    Task(name = "deploy project", folder_id = 1),
                    Task(name = "meeting at 15", folder_id = 1),
                    Task(name = "go to dentist", folder_id = 2),
                    Task(name = "ask for appointment", folder_id = 2),
                    Task(name = "buy medicine at the pharmacy", folder_id = 2),
                    Task(name = "book hotel", folder_id = 3),
                    Task(name = "clean and wipe", folder_id = 4),
                    Task(name = "paint walls", folder_id = 4),
                    Task(name = "ask for a raise", folder_id = 5),
                    Task(name = "app integration", folder_id = 5),
                    Task(name = "study hard", folder_id = 6),
                    Task(name = "learn ideograms", folder_id = 6),
            ])
        except:
            raise CommandError('Error while trying to populate database with tasks')

        print("database populated succesfully!")