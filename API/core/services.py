
from .models import *
from .serializers import *

def filterFolders(request, folders):
  '''
  This function matches folders objects with query params filter in url (user name): 
  - receives: request
  - returns: queryset with filtered objects. If not receive query params, return all.
  '''
  
  # user_id = request.query_params.get('creator')

  # if user_id:
  #   folders = folders.filter(creator = user_id)
    
  user = request.query_params.get('creator')

  if user:
    user_id = User.objects.filter(name__exact = user).first()
    folders = folders.filter(creator = user_id)
    
  return folders

def filterTasks(request, tasks):
  '''
  This function matches folders objects with query params filter in url (folder name): 
  - receives: request
  - returns: queryset with filtered objects. If not receive query params, return all.
  '''
     
  folder = request.query_params.get('folder')

  if folder:
    folder_id = Folder.objects.filter(name__exact = folder).first()
    tasks = tasks.filter(folder = folder_id)
    
  return tasks