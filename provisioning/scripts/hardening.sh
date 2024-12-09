#!/bin/bash

# Atualizar e fazer upgrade do sistema
sudo apt-get update && sudo apt-get upgrade -y

# Instalar ferramentas básicas de segurança
sudo apt-get install -y ufw fail2ban auditd

# Configurar o UFW (Firewall Simplificado)
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw enable

# Configurar o Fail2Ban
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo sed -i 's/bantime  = 10m/bantime  = 1h/' /etc/fail2ban/jail.local
sudo sed -i 's/maxretry = 5/maxretry = 3/' /etc/fail2ban/jail.local

# Habilitar o Auditd para registro de logs
sudo systemctl enable auditd
sudo systemctl start auditd

# Desabilitar login root via SSH
sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config

# Reiniciar o serviço SSH
sudo systemctl restart sshd

# Verificações finais de segurança
echo "Hardening do servidor completo."
