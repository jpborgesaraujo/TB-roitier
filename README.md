# 🔒 Projeto de Servidor Web Seguro

## 📝 Descrição Detalhada do Projeto

O projeto consiste no planejamento, instalação e configuração de um Servidor de Hospedagem seguro, com foco em boas práticas de segurança da informação.

## 🎯 Objetivos Específicos

1. **Planejamento do Hardware**
Processador

    Modelo: Intel Xeon E5-2680 v4
        Núcleos: 14 núcleos físicos, 28 threads (hyper-threading).
        Frequência Base: 2,4 GHz (turbo até 3,3 GHz).
        Cache: 35 MB L3 cache.
        Arquitetura: 64 bits, com suporte a AVX-512.

Placa Mãe

    Modelo: X99 MR9S v6
        Chipset: Intel X99.
        Memória: Suporte até 128 GB DDR4.
        Conectividade: Múltiplas portas SATA III, suporte a RAID (0, 1, 5, 10).
        PCIe: Slots para placas adicionais, incluindo gráficos ou rede.
        Rede: 1 porta Gigabit Ethernet.

Memória RAM

    Capacidade: 64 GB (2x32 GB).
    Tipo: DDR4, 3000 MHz.
    ECC: Recomendado para estabilidade em servidores.

Armazenamento

    SSD: Mínimo 120 GB (para o SO), preferencialmente NVMe.
    HDD: 1 TB ou mais para armazenamento de dados, 7200 RPM.

Placa de Rede

    Modelo integrado: Gigabit Ethernet.
    Upgrade: Opção para rede 10 Gb via PCIe.

Fonte de Alimentação

    Potência: 650W a 800W.
    Certificação: 80 PLUS Bronze ou superior.

Sistema de Refrigeração

    Cooler: Ar ou líquida dependendo da carga térmica esperada.
    Ventilação: Ventoinhas de 120 mm ou 140 mm no gabinete.

Gabinete

    Formato: Torre ou rackmount.
    Ventilação: Bom fluxo de ar para dissipação térmica.

Sistema Operacional

    Distribuições sugeridas: Ubuntu Server LTS ou CentOS Stream.
    Arquitetura: 64 bits.
    RAM: Mínimo 8 GB (16 GB recomendado).
    Espaço: 20 GB para o SO.

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
