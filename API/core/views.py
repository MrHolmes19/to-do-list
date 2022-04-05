from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *
from .services import *

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserSerializer.Meta.model.objects.all()
    
    
class FolderViewSet(viewsets.ModelViewSet):
    serializer_class = FolderSerializer
    queryset = FolderSerializer.Meta.model.objects.all()
    
    def list(self, request):       
        folders = filterFolders(request, self.queryset)
        serializer = self.serializer_class(folders, many=True)
        print(serializer.data)
        return Response(serializer.data)

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = TaskSerializer.Meta.model.objects.all()
    
    def list(self, request):        
        tasks = filterTasks(request, self.queryset)
        serializer = self.serializer_class(tasks, many=True)
        print(serializer.data)
        return Response(serializer.data)