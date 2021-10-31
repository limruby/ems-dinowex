# Deployment
Connect ssh to 103.18.2.220
The project is located at `~/vexsdev/ems-dinowex`

### Build and Deploy
go to `~/vexsdev/ems-dinowex`

execute `sudo ./_build_deploy_dev.sh`

It will build two images and deploy base on configuration at `backend/docker-compose-fsktm.yaml`

### Database
Database raw data is located at `./backend/mongo-volume`

### Migrate
When migrate, the targeted server need to have:
- npm
- docker & docker-compose
- git

Clone this repo, checkout to `staging` branch

Copy `./backend/mongo-volume`. Then, paste it to `{repo_dir}/backend/mongo-volume` 

Copy `./env`, paste it to `{repo_dir}/.env` and Copy `./backend/env`, paste it to `{repo_dir}/backend/.env` 

Run `sudo ./_build_deploy_dev.sh`
