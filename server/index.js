const express = require('express');
const app = express();
const mongoose = require('mongoose');
const formidableMiddleware = require('express-formidable');

app.set('views', './views')
app.set('view engine', 'pug')
//A:configure donde estan mis vistas y mi motor de plantillas

app.use(formidableMiddleware()); //A: para manejar el formato de la informacion enviado en las peticiones
app.use(express.static('public'));
app.use( require('../routes/userRoutes') );
//A:pido las rutas para los endpoint usuario

MONGO_CONFIG= {
  useUnifiedTopology: true, 
  useNewUrlParser: true
}

mongoose.connect('mongodb://localhost:27017/PruebaDomingo', MONGO_CONFIG, 
  (err)=>{
    if (err) return console.log(err);
    console.log('Conectado a la Base de datos')
});

app.listen(3000,()=>{
  console.log("escuchando en el puerto 3000")
})