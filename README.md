# Projet 1 CCI CAMPUS CDA React-Express-Front

## Déployement sur un serveur en ligne

### 1-Introduction

    - Gestionnaire de Mots en passes en ligne
    - Ce guide va vous permettre de mettre en ligne l'application sur un serveur NGINX
    - Les prérequis :
        - Un serveur web sous Linux
        - NGINX
        - Une connexion SSH au serveur
        - Node.js (version 20.x ou supérieure)
        - npn (version 10.x ou supérieure)
        - Système de gestion de base de données (PostgreSQL)

### 2-Préparation du Serveur

- #### Instalation de NGINX :
  - Voici la [documention officiel](https://ubuntu.com/tutorials/install-and-configure-nginx#1-overview) de Ubuntu pour l'instalation de NGINX.
  - Installez le SSL grâce à [Certbot](https://certbot.eff.org/instructions?ws=nginx&os=sharedhost)
- #### Instalation de Node.js
  `sudo apt update`
  `sudo apt install nodejs npm`
- #### Instalation de PostgresSQL
  `sudo apt install postgresql`
  Pour plus d'information la [documentation officiel](https://doc.ubuntu-fr.org/postgresql) d'Ubuntu.
- #### Ouverture des ports nécessaires
  Pour ouvrir les ports nécessaires sur Linux, utilisez les commandes suivantes :
  ```
  sudo ufw allow 80/tcp   # HTTP
  sudo ufw allow 443/tcp  # HTTPS
  sudo ufw allow 5432/tcp # PostgreSQL
  sudo ufw allow 3000/tcp # Port par défaut pour le serveur Express
  sudo ufw enable         # Activer le pare-feu
  sudo ufw status         # Vérifier le statut du pare-feu
  ```
  Pour plus d'information la [documentation officiel](https://doc.ubuntu-fr.org/ufw) d'Ubuntu.

### 3-Configuration de la Base de Données PostgreSQL

```
sudo -i -u postgres
```

Pour plus d'information la [documentation officiel](https://doc.ubuntu-fr.org/postgresql) d'Ubuntu.

### 4-Déploiement de l'application React

#### 4.1 Installation de Git

`sudo apt install git`

#### 4.2 Transfert des fichiers avec Git et GitHub

1. Sur le serveur de production :

```bash
# Naviguez vers le répertoire web
cd /var/www

# Clonez le dépôt
git clone https://github.com/Shaktas/Projet-1-React-Express-Front.git
# Pour les mises à jour futures
cd https://github.com/Shaktas/Projet-1-React-Express-Front.git
git pull origin main
```

2. Configurez les permissions :

```bash
sudo chown -R www-data:www-data /var/www/pwd
sudo chmod -R 755 /var/www/your-app
```

#### 4.3 Configuration NGINX

Créez un fichier de configuration pour votre application :

```bash
sudo nano /etc/nginx/sites-available/pwd-manager
```

Ajoutez la configuration suivante :

```nginx
server {
    listen 443;
    server_name https://brmic.dipsw-ccicampus.dev/;

    root /var/www/pwd-manager;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### 4.4 Build l'application React

`npm run build`

### 5-Backend et API

- Créer un fichier .env

- Changer les valeurs du fichier .env pour coller au port ouvert plus haut

# BUG

- Logout plante au bout d'un certain temps ??
- regler le storage de l'id user
