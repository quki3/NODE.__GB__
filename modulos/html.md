# html
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
