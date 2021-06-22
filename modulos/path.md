# modulo Path

## si queremos que nos devuelvan las propiedades del archivo en un objeto para poder trabajar los valores usamos
## path.parse
```bash
path.parse(path)
path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

```
