const mongoose = require('mongoose');
require('dotenv').config();

//MongoDB Atlas
//Para user este metodo de poner MONGODB_URI en
//.env se debe primero installar dotenv con npm
//(npm install dotenv), escribir en el archivo .env
//MONGODB_URI = 'bla bla bla', despues en el database.js
//"require('dotenv').config()" y en index.js importar el
//modulo database con "import './database'"
const URI = process.env.MONGODB_URI

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(db => console.log('Base de datos conectada!!!'))
    .catch(err => console.error(err));

module.exports = mongoose;