rm -r ./vexs.tar
docker build -t vexsdev/backend . 
docker save vexsdev/backend > vexs.tar
docker rmi vexsdev/backend