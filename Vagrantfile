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
  
    # Sync Folders
    config.vm.synced_folder "meu_site", "/vagrant/meu_site"
  end