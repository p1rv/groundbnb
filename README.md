# Overview

groundbnb NestJS and ReactJS Project with Docker and PostgreSQL
This repository contains a full-stack web application inspired by Airbnb, built using NestJS for the backend, ReactJS for the frontend, and Docker for containerization. The PostgreSQL database is connected using TypeORM.

# Prerequisites

Docker installed on your machine
Node.js and npm installed
PostgreSQL database credentials
Setup Instructions

# Clone the repository:

git clone https://github.com/p1rv/groundbnb.git

cd groundbnb

# Create a .env file in the backend directory and configure your PostgreSQL connection:

.env example:
POSTGRES_HOST=""
POSTGRES_PORT=""
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
JWT_SECRET=""

# From the root directory

docker-compose up --build
Access the application:

Backend API: http://localhost:3050/api

Frontend: http://localhost:3050
