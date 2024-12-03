# TB-roitier

Inicie o Docker
para contruir a imagem e necessario entrar na pasta do "meu_site" e digitar o comando: docker build -t meu-site 
para rodar a imagem: docker run -d -p 80:80 meu-site
depois entre na pagina do site: http://localhost:80

#Planejamento de hardware 

#### **1. Processador**
- **Modelo:** Intel Xeon E5-2680 v4
  - **Núcleos:** 14 núcleos físicos, 28 threads (hyper-threading).
  - **Frequência Base:** 2,4 GHz (turbo até 3,3 GHz).
  - **Cache:** 35 MB L3 cache.
  - **Arquitetura:** 64 bits, suportando instruções AVX-512, ideal para ambientes de alta carga computacional.

#### **2. Placa Mãe**
- **Modelo:** X99 MR9S v6
  - **Chipset:** Intel X99.
  - **Sockets:** Suporte para **Intel Xeon E5 v3/v4** (com o E5-2680 v4).
  - **Memória:** Suporte para até 128 GB de memória DDR4.
  - **Slots de memória:** 8 slots DIMM, suportando memória DDR4 até 3333 MHz (dependendo do processador).
  - **Conectividade:** Múltiplas portas SATA III (6 Gbps), suporte a RAID (RAID 0, 1, 5, 10).
  - **PCIe:** Suporte a várias placas de expansão (grafica, rede, etc.).
  - **Placa de rede:** Geralmente 1 porta Gigabit Ethernet (sendo possível adicionar placas de rede adicionais via PCIe).

#### **3. Memória RAM**
- **Capacidade:** 64 GB (2 módulos de 32 GB cada).
- **Tipo:** DDR4
- **Velocidade:** 3000 MHz
- **Características adicionais:** 
  - Memória ECC (Error Correction Code) recomendada para servidores, a fim de corrigir erros de memória e melhorar a estabilidade.
  - Se a sua placa-mãe suporta ECC, é altamente recomendado usar, especialmente para tarefas críticas como servidores de banco de dados ou hospedagem.

#### **4. Armazenamento**
- **SSD (para o Sistema Operacional):**
  - **Capacidade mínima:** 120 GB
  - **Tipo:** SSD SATA III (6 Gbps) ou NVMe (dependendo das necessidades de desempenho).
  - **Características:** Velocidade de leitura e gravação mais rápida que HDs convencionais, garantindo uma resposta mais rápida para o sistema operacional e softwares.

- **HDD (para armazenamento de dados):**
  - **Capacidade mínima:** 1 TB (dependendo da carga de trabalho e necessidade de armazenamento).
  - **Velocidade:** 7200 RPM para melhor desempenho.

#### **5. Placa de Rede**
- **Modelo:** 1x Gigabit Ethernet (10/100/1000 Mbps).
  - **Possibilidade de upgrade:** Se for necessário mais desempenho de rede (em servidores de alta demanda), considere adicionar uma placa de rede de 10 Gb via PCIe.

#### **6. Fonte de Alimentação**
- **Potência recomendada:** 650W a 800W
  - **Certificação:** Pelo menos **80 PLUS Bronze**, garantindo maior eficiência energética.
  - **Recursos adicionais:** Proteção contra sobrecarga, curto-circuito, e proteção térmica.

#### **7. Sistema de Refrigeração**
- **Processador Xeon E5-2680 v4:** Como ele é um processador de alto desempenho, ele pode gerar bastante calor sob carga.
  - **Cooler recomendados:** Cooler de ar (se o orçamento for mais restrito) ou sistema de refrigeração líquida (para maior eficiência térmica em servidores com alta carga).
  - **Refrigeração adicional:** Ventoinhas adicionais de 120 mm ou 140 mm para garantir fluxo de ar adequado na caixa.

#### **8. Gabinete**
- **Tipo:** Torre ou rackmount (dependendo da forma de instalação).
  - **Espaço:** Certifique-se de que o gabinete tenha espaço suficiente para acomodar a placa-mãe X99 MR9S v6 e os componentes adicionais, como as placas de expansão PCIe e discos rígidos.
  - **Ventilação:** O gabinete deve ter um bom sistema de ventilação para garantir o resfriamento eficiente do servidor.

#### **9. Backup e Armazenamento de Dados (Opcional)**
- **Dispositivo de Backup:** Dependendo do seu uso, pode ser interessante ter um dispositivo de backup extra, como um NAS ou uma unidade de fita para garantir segurança de dados.
- **Placa RAID:** Se você precisar de uma configuração RAID mais robusta para redundância de dados, você pode considerar a instalação de uma placa RAID dedicada.
