# Node.js.__GB__
## Creando una mini consola que escucha lo que escribes
```bash
 // Output un prompt
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remueve la nueva línea
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  });

```
## Dependiendo el comando que se nos pase ejecutamos algo
```bash
// Output un prompt
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {
    let arg = data.toString().trim().split(" "); // remueve la nueva línea y con split separator" " se da cuenta que arg son porque devuelve un array
    let cmd = arg.shift();//elimina el primer elemento del array y lo retorna
    if(cmd==='echo'){
        process.stdout.write(arg.join(" "))
    }else if(cmd ==='ls'){
        process.stdout.write("ls")
    }else if(cmd==='otroComando'){
        process.stdout.write("otro comando")
    }
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  });
  ```
  ## Dependiendo el comando que se nos pase ejecutamos algo. Un poco mas escalable
  
  ### index.js
  ```bash
     module.exports = {
    date:function(){
        process.stdout.write(Date());
    },
    pwd:function(){
        process.stdout.write(process.cwd());
    },
    echo:function(arg){
        process.stdout.write(arg.join(" "));
    }
    }
  ```
  ### bash.js
  
  ```bash
   const commands = require('./commands/index');
  // Output un prompt
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {
    let arg = data.toString().trim().split(" "); // remueve la nueva línea y con split separator" " se da cuenta que arg son porque devuelve un array
    let cmd = arg.shift();//elimina el primer elemento del array y lo retorna
    //arg = ['lorem','lorem']
    if(commands[cmd]){
       commands[cmd](arg)
    }
    

    process.stdout.write('\nprompt > ');
  });

  ```
  ## encapsulando y limpiando el archivo
  
  ### index.js
  ```bash
   module.exports = {
    date:function(arg,done){
        done(Date());
    },
    pwd:function(arg,done){
        done(process.cwd());
    },
    echo:function(arg, done){
        done(arg.join(" "));
    }
}
  ```
  ### bash.js
  ```bash
   const commands = require('./commands/index');

const done = function(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

  // Output un prompt
  
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {
    let arg = data.toString().trim().split(" "); // remueve la nueva línea y con split separator" " se da cuenta que arg son porque devuelve un array
    let cmd = arg.shift();//elimina el primer elemento del array y lo retorna
    //arg = ['lorem','lorem']
    if(commands[cmd]){
       commands[cmd](arg,done)
    }
    

    
  });
  ```
## Agregando una funcion fs
### index.js
```bash
// fs = file system
var fs= require('fs');

module.exports = {
    date:function(arg,done){
        done(Date());
    },
    pwd:function(arg,done){
        done(process.cwd());
    },
    echo:function(arg, done){
        done(arg.join(" "));
    },
    ls:function(args,done){
        fs.readdir('.',function(err,files){
            if(err) throw err;
            //console.log(files);
            var output = '';
            files.forEach(f=>{
                output = output + f + '\n';
            })
            done(output)
        })
    }
}
 
  
```
### bash.js
```bash
const commands = require('./commands/index');

const done = function(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

  // Output un prompt
  
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {
    let arg = data.toString().trim().split(" "); // remueve la nueva línea y con split separator" " se da cuenta que arg son porque devuelve un array
    let cmd = arg.shift();//elimina el primer elemento del array y lo retorna
    //arg = ['lorem','lorem']
    if(commands[cmd]){
       commands[cmd](arg,done)
    }
    

    
  });
```

## finalizando consola
### index.js
```bash
// fs = file system
var fs= require('fs');
var request = require('request');

module.exports = {
    date:function(arg,done){
        done(Date());
    },
    pwd:function(arg,done){
        done(process.cwd());
    },
    echo:function(arg, done){
        done(arg.join(" "));
    },
    ls:function(args,done){
        fs.readdir('.',function(err,files){
            if(err) throw err;
            //console.log(files);
            var output = '';
            files.forEach(f=>{
                output = output + f + '\n';
            })
            done(output)
        })
    },
    cat:function(arg,done){
        fs.readFile(arg[0],'utf8',function(err,data){
            if(err) throw err;
            done(data);
        })
    },
    head: function(arg,done){
        fs.readFile(arg[0],'utf8', function(err,data){
            if(err) throw err;
            let lines = data.split('\n').splice(0,10).join('\n')
            done(lines);
        })
    },
    tail: function(arg,print){
        fs.readFile(arg[0],'utf8', function(err,data){
            if(err) throw err;
            let lines = data.split('\n').splice(-10).join('\n');
            done(lines);
        })
    },
    curl:function(arg,print){
        request(arg[0],function(err,data){
            if(err) throw err;
            done(data.body)
        })
    }
}
```
### bash.js
```bash
const commands = require('./commands/index');

const done = function(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

  // Output un prompt
  
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {
    let arg = data.toString().trim().split(" "); // remueve la nueva línea y con split separator" " se da cuenta que arg son porque devuelve un array
    let cmd = arg.shift();//elimina el primer elemento del array y lo retorna
    //arg = ['lorem','lorem']
    if(commands[cmd]){
       commands[cmd](arg,done)
    }else{
      done('cmd not found');
    }
    

    
  });
```
