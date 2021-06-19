# fs
## si queremos leer un directorio fs.readdir(path[, options], callback)
```bash
  fs.readdir('.',) //esto le dice a ls.readdir que busque donde estamos parados
  fs.readdir('.',callback(err,files))
```
