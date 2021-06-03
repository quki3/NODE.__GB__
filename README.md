# NODE.__GB__

npm init -y //esto inicia un package.json que nos deja configurar el proyecto

npm i json-server //nos trae las dependencias para el server
npm install -g json-server //lo mismo pero de forma global

Create a db.json file with some data
{"posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],"comments": [ { "id": 1, "body": "some comment", "postId": 1 }],"profile": {"name":"typicode" }}

en package.json el "scripts"
cambiar "test" por( "server":"json-server --watch db.json")

npm run server

Now if you go to http://localhost:3000/posts/1, you'll get THE TODO
