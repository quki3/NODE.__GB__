# Express 
## es un framework de node.js para crear de forma rapida y sencilla(servidores .etc)
### Instalacion
```bash
    npm install express --save // --save esta deprecado en las verciones nuevas
```
### hola mundo con expres y node
```bash
    const express = require('express');
    const server = express();
    
    server.get(('/',(req,res)=>{
        res.send('<h1>hola mundo</h1>');
        res.end();
    });
    server.listen(3000,()=>{
        console.log('server on port 3000');
    })
```
