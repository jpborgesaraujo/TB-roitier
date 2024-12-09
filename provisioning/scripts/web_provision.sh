#!/bin/bash

# Navegar para o diretório do site
cd /vagrant/meu_site

# Construir a imagem Docker
docker build -t secure-web-server .

# Executar o contêiner Docker
docker run -d \
  --name web_container \
  -p 80:80 \
  --restart unless-stopped \
  secure-web-server

echo "Servidor web implantado com sucesso."
