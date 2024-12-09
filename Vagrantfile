Vagrant.configure("2") do |config|
    # Base Ubuntu 20.04 LTS image
    config.vm.box = "ubuntu/focal64"
    
    # VM Configuration
    config.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.cpus = 2
      vb.name = "secure_web_server"
    end
  
    # Network Configuration
    config.vm.network "private_network", ip: "192.168.56.10"
    config.vm.network "forwarded_port", guest: 80, host: 8080
  
    # Provisioning Scripts
    config.vm.provision "shell", path: "provisioning/scripts/hardening.sh"
    config.vm.provision "shell", path: "provisioning/scripts/docker_install.sh"
    config.vm.provision "shell", path: "provisioning/scripts/web_provision.sh"
  
    config.vm.provision "shell", inline: <<-SHELL
    # Atualizar pacotes
    sudo apt-get update -y
    sudo apt-get upgrade -y

    # Instalar Apache2
    sudo apt-get install -y apache2

    # Garantir que o Apache2 inicie automaticamente
    sudo systemctl enable apache2

    # Iniciar o Apache2
    sudo systemctl start apache2

    # Verificar se o Apache2 está rodando
    sudo systemctl status apache2
  SHELL

    # Sync Folders
    config.vm.synced_folder "meu_site", "/vagrant/meu_site"
  end