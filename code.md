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
  
