# Project Name
images-gallery
## Description

Images Gallery is a single-page application that allows users to search for images based on their input and returns results from Unsplash. The front-end is built with React, utilizing components, state, props, and React hooks. The back-end is written in Python using Flask to create a REST API, with Axios handling API requests in the React app. Both the front-end and back-end are dockerized for practical purposes.

This project was created following the Udemy course ["Full Stack Web Development Bootcamp".](https://www.udemy.com/course/full-stack-web-development-bootcamp/)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

### Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Installation

### Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/gregfc95/images-gallery
    ```
2. Navigate to the project directory and install dependencies:
    ```bash
    cd images-gallery
    npm install
    ```
3. Navigate to api folder and install dependencies:
    ```bash
    pip install pipenv
    pipenv requirements > requirements.txt
    pip install -r requirements.txt
    ```

4. Build and start the Docker containers:
    ```bash
    docker-compose up -d --build
    ```

## Usage

### Access the Services

- **Frontend**: Access the frontend application at `http://localhost:3000`
- **API**: Access the API at `http://localhost:5050`
- **Mongo Express**: Access Mongo Express at `http://localhost:8081`

### Example Commands

```bash
# Example command to run a specific service
docker-compose up -d frontend

# Example command to stop all services
docker-compose down
```

## Features

- Search for images from Unsplash based on user input.
- React-based front-end with components, state, props, and hooks.
- Python Flask back-end providing REST API services.
- Dockerized front-end and back-end for ease of deployment.