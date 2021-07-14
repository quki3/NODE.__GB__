# http
## el modulo http se usa para poder crear servidores y asi poder comunicar nuestraS PAGINAS
```bash
  const http = require('http')
```
## http.createServer([options][, requestListener]) para crear un servidor en local
```bash
    http.createServer([options][, requestListener])
    *  options <Object>
    *  requestListener <Function>
    const http = require('http');
    const server = http.createServer();

    server.listen(3000);

   console.log('servidor escuchando en el puerto 300...')
 ```
## http.writehead(statusCode[, statusMessage][, headers])//? para crear un response enpezamos escribiendo el header
```bash
* statusCode //? 3-digit HTTP status code,
* statusMessage //? como segundo argumento es un estado mensaje que le quieras dar,
* headers //? son las claves y los valores 
------------------------------------------------------------------------------------
const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);

```
