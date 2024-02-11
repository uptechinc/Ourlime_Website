#!/bin/bash

# Name of the Docker image
IMAGE_NAME="ourlime_website"

# Name of the Docker container
CONTAINER_NAME="ourlime_container"

# Build the Docker image for production
docker build -t $IMAGE_NAME .

# Stop and remove the existing container if it exists
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# Run the new container in detached mode (in the background)
docker run -d -p 4000:4000 -e PORT=4000 -v "$(pwd):/app" --name $CONTAINER_NAME $IMAGE_NAME
