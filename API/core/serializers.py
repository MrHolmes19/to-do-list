from core.models import User, Folder, Task
from rest_framework import serializers, fields
from django.conf import settings
#from .utils import *

class UserSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields = '__all__'


class FolderSerializer(serializers.ModelSerializer):
    
  class Meta:
    model = Folder
    fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    
  class Meta:
    model = Task
    fields = '__all__'