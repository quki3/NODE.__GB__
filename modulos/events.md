# events
## esta modulo crea una clase eventEmiter (evento emisor)

# si queremos registrar un evento emitter.emit(eventName[, ...args])

```bash
emitter.emit(eventName[, ...args])
llama a cada listeners(oyentes) registrados por el evenName le podemos pasar cualquier args.
```
# si queremos registrarnos a un evento usamos
## emitter.on(eventName, listener)
```bash
emitter.on(eventName, listener)
eventName <string> | <symbol> The name of the event.//el evento al que nos queremos registrar
listener <Function> The callback function//la funcion que dira que hacer cuado ocurra el evento
Returns: <EventEmitter>
```
```bash
const EventEmitter = require('events');
//en este punto yo tengo la clase eventEmitter ahora necesito instanciar esa clase
const emitter = new EventEmitter();

//registrar el listener
emitter.on('mensajeLoger',(arg)=>{
    console.log('Listener llamado...',arg);
})
//registramos el evento
emitter.emit('mensajeLoger',{id:1,url:'http://prueba.com'});
```
