#!/bin/bash

# Navigate to site directory
cd /vagrant/meu_site

# Build Docker image
docker build -t secure-web-server .

# Run Docker container
docker run -d \
  --name web_container \
  -p 80:80 \
  --restart unless-stopped \
  secure-web-server

echo "Web server implantado com sucesso."