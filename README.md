# NODE.__GB__

 inicia un package.json que nos deja configurar el proyecto
            
            npm init -y 

 trae las dependencias para el server
          
            npm i json-server
 lo mismo pero de forma global
  
            npm install -g json-server

Create a db.json file with some data

        {"posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],"comments": [ { "id": 1, "body": "some comment", "postId": 1 }],"profile":               {"name":"typicode" }}

en package.json en el "scripts"
pon 

         "server":"json-server --watch db.json"
correra en el puerto 3000 por default con el comando en consola npm run server
         
 ## para correr en puerto 4000

```bash
  "server": "json-server --watch db.json --port 4000"
```
corre el localhost/3000

          npm run server

Now if you go to http://localhost:3000/posts/1, you'll get THE TODO
