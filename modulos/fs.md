# fs
### fs es un modulo que nos permite poder trabajor con modulos del sistema operativo es decir nos permite interacuar con archivos del sistema

# si queremos crear un nuevo archivo 
```bash
  fs.writeFile(file, data[, options], callback)
  fs.writeFile('./nombreDeArchivo.txt','lo que quiera poner denro del archivo', callback)
```
# si queremos eliminar un archivo
```bash
 fs.unlink(path, callback)
  
  if(fs.existsSync('./newArch'){
    fs.unlink('./newArch',(err,data)=>{
      if(err){
        console.log(err)
        }else{console.log('the file deleted')}
    })
  }else{
    console.log('the file already deleted')
  }
```
# si queremos crear una nueva carpeta
```bash
  fs.mkdir(path[, options], callback)
  fs.mkdir('newFolder',callback)
  if(!fs.existsSync('newFolder'){
    fs.mkdir('newFolder',(err,data)=>{
      if(err){
        console.log(err)
        }else{console.log('a new folder create')}
    })
  }else{
    console.log('the folder already exist')
  }
```
# si queremos eliminar una  carpeta
```bash
  fs.rmdir(path[, options], callback)
  fs.rmdir('newFolder',callback)
  if(!fs.existsSync('newFolder'){
    fs.rmdir('newFolder',(err,data)=>{
      if(err){
        console.log(err)
        }else{console.log('the folder deleted')}
    })
  }else{
    console.log('the folder already deleted')
  }
```
# Si queremos leer un directorio fs.readdir(path[, options], callback)
## de manera Asyncrona
```bash
fs.readdir(path[, options], callback)
```
<code> * el path es la ruta</code>
<code> * el callback toma dos argumentos (err,files)</code>
<code> * los files son los archivos que estoy queriendo conseguir</code>
```bash
  fs.readdir('.',) //esto le dice a ls.readdir que busque donde estamos parados
  fs.readdir('./', (err,files)=>{
      if(err) console.log('error',err);
      else console.log(''resultado',files);
  });
 
```
## de manera sincrona
```bash
  fs.readdirSync(path[, options])
```
<code> * el path es la ruta</code>
# si queremos leer un archivo
```bash
  fs.readFile('/etc/passwd'(el ach o path que yo quiero leer), 'utf8'(en que encoding lo tiene que leer), callback(err,data));
```
