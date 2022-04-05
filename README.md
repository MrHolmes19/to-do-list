# TO-DO LIST

Simple web application that allows you to create to-do items and folders to group them. Developed using Django Rest Framework and React Js

## Folder structure

This repo contains:
* API folder: backend API REST
* frontend folder: frontend web app
* docker-compose file: Instructions for dockerization

## Back-end App

I built the application with Django using the Django REST Framework library. I created the database using ORM by defining some models and used ModelViewSet for the CRUD request.
I didn't worry about security as it's a small sample project.

Main Endpoints (local):
* http://127.0.0.1:8000/core/users/
* http://127.0.0.1:8000/core/folders/
* http://127.0.0.1:8000/core/tasks/


## Front-end App

I used React JS and some basic styling with bootstrap. This project was structured as follows:

### 1. Login Page

It is a quite simple login screen. Once you logged in, folders and task shown will be those attached with the users. As it's a sample, the credentials were harcoded in the frontend. You can log in with:

- usersnames: "leandro", "hernan" or "shinji" 
- passwords: in all cases "123"

Access page (local):
http://localhost:3000/


### 2. Folders Page

You can watch the current folders, create new ones and view the tasks inside each one. There is a button to go back.


### 3. Tasks Page

You can see and check as done all tasks in the folder, create new ones and edit the existents. There is a button to return to the parent folder

### Component structure

This app was built using following component family:

* LoginForm
  |
* |--> FolderPage --> FolderForm
  |             |---> FolderTable --> FolderTableRow
* |--> TasksPage ---> TasksForm
               |----> TasksTable ---> TasksTableRow
                              |-----> TasksModal

And the followings that are reusables:

* Error404 (Page for pages not found)
* Message
* Loader   (Load Spinner)
* HelpHttp (For Http request)


## Database

I used MySQL for data persistance. This database is being populated by a custom management command launched from django when the docker container is running. The command is called by "python manage.py populateDB".

PORT: 3306

## Dockerization

The file docker-compose.yml contains the link of the 3 images. Both back-end app and front-end back have their own dockerfile.

## Deploy

This application was deployed to Heroku: