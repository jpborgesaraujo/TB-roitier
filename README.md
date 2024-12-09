# 🔒 Projeto de Servidor Web Seguro

## 📝 Descrição Detalhada do Projeto

O projeto consiste no planejamento, instalação e configuração de um Servidor de Hospedagem seguro, com foco em boas práticas de segurança da informação.

## 🎯 Objetivos Específicos

1. **Planejamento do Hardware**
         Processador
      - Modelo: Intel Xeon E5-2680 v4
      - Núcleos: 14 núcleos físicos, 28 threads (hyper-threading).
      - Frequência Base: 2,4 GHz (turbo até 3,3 GHz).
      - Cache: 35 MB L3 cache.
      - Arquitetura: 64 bits, suportando instruções AVX-512, ideal para ambientes de alta carga computacional.

         Placa Mãe
      - Modelo: X99 MR9S v6
      - Chipset: Intel X99.
      - Sockets: Suporte para Intel Xeon E5 v3/v4 (com o E5-2680 v4).
      - Memória: Suporte para até 128 GB de memória DDR4.
      - Slots de memória: 8 slots DIMM, suportando memória DDR4 até 3333 MHz (dependendo do processador).
      - Conectividade: Múltiplas portas SATA III (6 Gbps), suporte a RAID (RAID 0, 1, 5, 10).
      - PCIe: Suporte a várias placas de expansão (grafica, rede, etc.).
      - Placa de rede: Geralmente 1 porta Gigabit Ethernet (sendo possível adicionar placas de rede adicionais via PCIe).

         Memória RAM
      - Capacidade: 64 GB (2 módulos de 32 GB cada).
      - Tipo: DDR4
      - Velocidade: 3000 MHz
      - Características adicionais: 
      - Memória ECC (Error Correction Code) recomendada para servidores, a fim de corrigir erros de memória e melhorar a estabilidade.
      - Se a sua placa-mãe suporta ECC, é altamente recomendado usar, especialmente para tarefas críticas como servidores de banco de dados ou hospedagem.

         Armazenamento
      - SSD (para o Sistema Operacional):
      - Capacidade mínima: 120 GB
      - Tipo: SSD SATA III (6 Gbps) ou NVMe (dependendo das necessidades de desempenho).
      - Características: Velocidade de leitura e gravação mais rápida que HDs convencionais, garantindo uma resposta mais rápida para o sistema operacional e softwares.

         HDD (para armazenamento de dados):
      - Capacidade mínima: 1 TB (dependendo da carga de trabalho e necessidade de armazenamento).
      - Velocidade: 7200 RPM para melhor desempenho.

         Placa de Rede
      - Modelo: 1x Gigabit Ethernet (10/100/1000 Mbps).
      - Possibilidade de upgrade: Se for necessário mais desempenho de rede (em servidores de alta demanda), considere adicionar uma placa de rede de 10 Gb via PCIe.

         Fonte de Alimentação
      - Potência recomendada: 650W a 800W
      - Certificação: Pelo menos 80 PLUS Bronze, garantindo maior eficiência energética.
      - Recursos adicionais: Proteção contra sobrecarga, curto-circuito, e proteção térmica.

         Sistema de Refrigeração
      - Processador Xeon E5-2680 v4: Como ele é um processador de alto desempenho, ele pode gerar bastante calor sob carga.
      - Cooler recomendados: Cooler de ar (se o orçamento for mais restrito) ou sistema de refrigeração líquida (para maior eficiência térmica em servidores com alta carga).
      - Refrigeração adicional: Ventoinhas adicionais de 120 mm ou 140 mm para garantir fluxo de ar adequado na caixa.

         Gabinete
      - Tipo: Torre ou rackmount (dependendo da forma de instalação).
      - Espaço: Certifique-se de que o gabinete tenha espaço suficiente para acomodar a placa-mãe X99 MR9S v6 e os componentes adicionais, como as placas de expansão PCIe e discos rígidos.
      - Ventilação: O gabinete deve ter um bom sistema de ventilação para garantir o resfriamento eficiente do servidor.

         Backup e Armazenamento de Dados (Opcional)
      - Dispositivo de Backup: Dependendo do seu uso, pode ser interessante ter um dispositivo de backup extra, como um NAS ou uma unidade de fita para garantir segurança de dados.
      - Placa RAID: Se você precisar de uma configuração RAID mais robusta para redundância de dados, você pode considerar a instalação de uma placa RAID dedicada.

         Requisitos Mínimos do Sistema Operacional:
      - Distribuição recomendada: Ubuntu Server LTS ou CentOS Stream.
      - Arquitetura: 64 bits (a arquitetura x86-64 é necessária para o Xeon E5-2680 v4).
      - Memória RAM mínima: 8 GB (recomendado 16 GB ou mais para melhor desempenho).
      - Espaço em Disco: Pelo menos 20 GB de espaço livre para o sistema operacional (para instalação básica).
      - Placa de Rede: A distribuição Linux irá reconhecer automaticamente a placa de rede integrada.
      
         Distribuições recomendadas:
      - Ubuntu Server LTS: Ideal para estabilidade e suporte a longo prazo.
      - CentOS Stream: Se preferir um ambiente de produção com foco em desempenho.


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

### 2. Gerenciamento da VM

```bash
# Verificar status
vagrant status

# Parar a VM
vagrant halt

# Destruir a VM
vagrant destroy
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
