#!/bin/bash

# Remover quaisquer instalações existentes do Docker
sudo apt-get remove docker docker-engine docker.io containerd runc

# Atualizar o índice de pacotes
sudo apt-get update

# Instalar dependências
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Adicionar a chave GPG oficial do Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Configurar o repositório estável
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar o Docker Engine
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose

# Adicionar o usuário atual ao grupo docker
sudo usermod -aG docker $USER

# Habilitar o serviço Docker
sudo systemctl enable docker
sudo systemctl start docker

echo "Docker instalado com sucesso."
