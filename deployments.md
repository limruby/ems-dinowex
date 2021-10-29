# Deployment
The project is located at `~/vexs/ems-dinowex`

### Build and Deploy
go to `~/vexs/ems-dinowex`

execute `sudo ./_build_deploy_prod.sh`

It will build two images and deploy base on configuration at `backend/docker-compose-fsktm-prod.yaml`

### Deploy only
go to `~/vexs/ems-dinowex`

execute `sudo ./_deploy_prod.sh`

It will deploy with existing images base on configuration at `backend/docker-compose-fsktm-prod.yaml`

### Database
Database raw data is located at `./backend/mongo-volume`

### Migrate
When migrate, the targeted server need to have:
- npm
- docker & docker-compose
- git

Clone this repo, checkout to `staging` branch

Copy `./backend/mongo-volume`. Then, paste it to `{repo_dir}/backend/mongo-volume` 

Run `sudo ./_build_deploy_prod.sh`