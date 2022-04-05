from django.db import models


class User(models.Model):
    '''
        Model that represents an user.
    '''
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = ("user")
        verbose_name_plural = ("users")
        
    def __str__(self):
        return self.name


class Folder(models.Model):
    '''
        Model that represents an user.
    '''
    name = models.CharField(max_length=255, blank=False, null=False)
    creator = models.ForeignKey('core.User', blank=False, null=False, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = ("folder")
        verbose_name_plural = ("folders")
        
    def __str__(self):
        return self.name
    
class Task(models.Model):
    '''
        Model that represents a to-do item.
        Each one belongs to one user.
    '''
    name = models.CharField(max_length=255, blank=False, null=False)
    completed = models.BooleanField(default=False)
    folder = models.ForeignKey('core.Folder', blank=False, null=False, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = ("Tasks")
        verbose_name_plural = ("Task")
        
    def __str__(self):
        return self.name