# fs
### fs es un modulo que nos permite poder trabajor con modulos del sistema operativo es decir nos permite interacuar con archivos del sistema

## si queremos crear un nuevo archivo 
```bash
  fs.writeFile(file, data[, options], callback)
  fs.writeFile('./nombreDeArchivo.txt','lo que quiera poner denro del archivo', callback)
```
## si queremos leer un directorio fs.readdir(path[, options], callback)
```bash
  fs.readdir('.',) //esto le dice a ls.readdir que busque donde estamos parados
  fs.readdir('.',callback(err,files))
```
## si queremos leer un archivo
```bash
  fs.readFile('/etc/passwd'(el ach o path que yo quiero leer), 'utf8'(en que encoding lo tiene que leer), callback(err,data));
```
