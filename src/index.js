// este modulo solo tiene la tarea de arracar la aplicacion
import app from './app'
import './database'

console.log('Hola '+ process.env.USERNAME);
console.log('La fecha actual es: '+ Date());

app.listen(app.get('port'));

console.log('Escuchando en el puerto...', app.get('port'));