FROM python:3.9-slim-buster

# Para leer mensajes de la consola de python
ENV PYTHONUNBUFFERED 1

RUN mkdir /app/
RUN mkdir /app/API

WORKDIR /app/API

COPY requirements.txt /app/API/

# Required commands to install mysql
RUN apt-get update
RUN apt-get install python3-dev default-libmysqlclient-dev gcc  -y

RUN python -m pip install -r requirements.txt

COPY . /app/API/

#EXPOSE 8000