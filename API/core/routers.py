from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'users', UserViewSet, basename = 'users')
router.register(r'folders', FolderViewSet, basename = 'folders')
router.register(r'tasks', TaskViewSet, basename = 'tasks')

urlpatterns = router.urls