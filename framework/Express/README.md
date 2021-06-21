# Express 

## es un framework de node.js para crear de forma rapida y sencilla(servidores .etc)
### Instalacion
```bash
    npm install express --save // --save esta deprecado en las verciones nuevas
```
### (Hola mundo) con expres y node
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

# Routing
### app.get('/routing',(req,res)=>{})
```bash
    app.get('/',(req,res)=>{
    res.end('hello word');

});
app.get('/login',(req,res)=>{
    res.end('Aqui va el ligin!');
})

app.get('*',(req,res)=>{
    res.end('archivo no encontrado')
})
```

# MiddLewares
### los middlewares se usan de la siguienta manera app.use(middleware())
### para obtener la url
#### el next lo tienes que poner para que node siga corriendo y no se quede esperando
```bash
app.use((req,res,next)=>{
    console.log('request url:' + req.url);
    next();
})
```
# settings
### las settings se usan como variables por Ej. le daremos el nombre a nuestra app
### las variables sirven para establecer las configuraciones de un motor de plantillas
```bash
app.set('app-nombre','como queremos que se llame la app');
app.listen(3000,()=>{
console.log('el nombre de la app es:',app.get('app-name'));
```
### motores de plantilla potencian el html
```bash
    aca va codigo de de los motores de plantilla
```
