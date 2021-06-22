# html
## el modulo http se usa para poder crear servidores y asi poder comunicar nuestraS PAGINAS
```bash
  const http = require('http')
```
## http.createServer(function(request,response){})
```bash
  const handleServer = function(req,res){
  res.writeHead(200,{'content-type': 'text/html'});
  res.write('<h1>hola Mundo desde Node.js</h1>);
  res.end();
  }
  const server = http.createServer(handleServer);
  
  server.listen(3000,function(){
    console.log('server on port 3000');
  });
```
