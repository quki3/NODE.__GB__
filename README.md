# Node.js.__GB__
# Entrada al sistema
```bash
login:kfjasdh
password:

```
# * Globales
### muesta la ruta de un archivo
```bash
"la ruta contenedora del archivo"
    __dirname
"la ruta completa"
    __filename
```


## levantando API falsa en localhost

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

         
para correr en puerto 4000

```bash
  "server": "json-server --watch db.json --port 4000"
```
corre el localhost/

          npm run server

Now if you go to http://localhost:3000/posts/1, you'll get THE TODO

# promesas
una promesa e suna funcion de node que nos permite buscar algo en un archivo para validar y haer algo con eso
```bash
let fount=true
const buscarEnDiccionario = new promise((resolve,reject)=>{
     if(fount){
     resolve ('la definicion de la palabra')
     }else{
     reject ('la palabra no existe')
     }
})
buscaEnDiccionario.then((data)=>{ console.log(data)},(err)=>{ console.log(err)})
```
