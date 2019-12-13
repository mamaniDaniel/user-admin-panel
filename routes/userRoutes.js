//INFO: las rutas para los endpoints relacionados con los usuarios

var express = require('express');
var router = express.Router();
const User = require('../models/user.js');

//****************MIDDLEWARES********************* */
router.use( function mostrarPeticion(req,res,next){ //U: imprime el verbo http y el endpoint
  const method= req.method;
  const url= req.url;
  console.log(method, ": " , url);
  next();
})
//A: un middleware especifico para este router

//************************************************** */

router.get('/', function (req, res) {
  res.render('index', { title: 'Este es mi primer titulo', message: 'Desde Pug!'});
})

router.post('/usuario',(req,res)=>{
  let email= req.fields.email;
  let password= req.fields.password;
  //TODO: desinfectar lo que me viene del formulario
  let nuevoUsuario= new User({email, password});
  //TODO: no guardar contraseñas, usar bcrypt
  //TODO: no guardar dos emails iguales
  //TODO: verificar email
  nuevoUsuario.save( (err, usuarioDB)=> {
    if (err) return res.send("error guardando usuario")
    if (usuarioDB) return res.send(usuarioDB);
    res.send ("habremos guardado che?");
  });
})

module.exports= router;