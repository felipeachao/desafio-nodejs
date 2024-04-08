Com o docker instalado em sua máquina, só precisa de um comando:

docker-compose up

Após esse comando, irá ser criado dois containers. 
1 para o banco de dados e outro para a api.

Como solicitado, Tem trẽs rotas para ser testada:

create: "/scheduling"   - post
read: "/scheduling"     - get
delete: "/scheduling"   - delete

porta padrão: 3000