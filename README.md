# 🔒 Projeto de Servidor Web Seguro

## 📝 Descrição Detalhada do Projeto

O projeto consiste no planejamento, instalação e configuração de um Servidor de Hospedagem seguro, com foco em boas práticas de segurança da informação.

## 🎯 Objetivos Específicos

1. **Planejamento do Hardware**
   - Detalhamento completo de especificações de processador, placa-mãe, memória RAM, armazenamento, placa de rede, fonte de alimentação, refrigeração e gabinete.

2. **Instalação e Configuração do Sistema Operacional**
   - Ubuntu 20.04 LTS
   - Configurações de segurança base

3. **Implementação de Hardening no Servidor**
   - Configuração de firewall (UFW)
   - Proteção contra ataques (Fail2Ban)
   - Restrições de acesso SSH
   - Logs de auditoria

4. **Instalação do Docker e Serviços**
   - Instalação do Docker e Docker Compose
   - Conteinerização do ambiente web
   - Isolamento de serviços

5. **Documentação e Versionamento**
   - Repositório Git
   - Documentação detalhada
   - Scripts de provisionamento automático

## 🛠 Arquitetura e Componentes

- Sistema Operacional: Ubuntu 20.04 LTS
- Virtualização: Vagrant
- Conteinerização: Docker
- Servidor Web: Nginx
- Ferramentas de Segurança: UFW, Fail2Ban, Auditd

## 📋 Pré-requisitos

- [Vagrant](https://www.vagrantup.com/downloads)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- Git
- Conhecimentos básicos em Linux e infraestrutura

## 💻 Instruções de Uso

### 1. Preparação do Ambiente

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd secure-web-hosting-project

# Iniciar o ambiente
vagrant up

# Conectar ao servidor
vagrant ssh

# Acessar o servidor
curl http://localhost:8080
```

### 2. Gerenciamento da VM

```bash
# Verificar status
vagrant status

# Parar a VM
vagrant halt

# Destruir a VM
vagrant destroy
```

## 🔍 Verificação dos Recursos de Segurança

### 1. UFW (Firewall)
```bash
# Verificar status do UFW
sudo ufw status verbose

# Listar todas as regras configuradas
sudo ufw show added
```

### 2. Fail2Ban
```bash
# Verificar status do serviço
sudo systemctl status fail2ban

# Visualizar logs de bloqueios
sudo fail2ban-client status
sudo fail2ban-client status sshd

# Verificar logs de ataques bloqueados
sudo grep "Fail2Ban" /var/log/fail2ban.log
```

### 3. Auditd (Logs de Auditoria)
```bash
# Verificar status do serviço
sudo systemctl status auditd

# Exibir logs de auditoria recentes
sudo ausearch -m LOGIN -i

# Listar regras de auditoria configuradas
sudo auditctl -l
```

### 4. Configurações SSH
```bash
# Verificar configurações do SSH
sudo sshd -T | grep -E "permitrootlogin|passwordauthentication"

# Inspecionar log de autenticações SSH
sudo grep sshd /var/log/auth.log
```

### 5. Atualizações do Sistema
```bash
# Verificar se há atualizações pendentes
sudo apt list --upgradable

# Exibir versão atual do sistema
cat /etc/os-release
```

## 🔒 Recursos de Segurança Implementados

- Firewall configurado com UFW
- Proteção contra ataques com Fail2Ban
- Isolamento de ambiente com Docker
- Logs de auditoria detalhados
- Restrições de acesso SSH
- Atualizações de sistema automáticas

## 📊 Critérios de Avaliação

1. Qualidade do hardening implementado
2. Funcionalidade dos scripts de automação
3. Clareza da documentação
4. Aderência às boas práticas de segurança

## 🚨 Considerações de Segurança

- Mantenha o sistema operacional atualizado
- Utilize senhas fortes e únicas
- Limite o acesso de usuários
- Faça backups regulares
- Monitore logs de segurança

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
