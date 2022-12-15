

//Creamos constantes y requerimos las liblerias
/* const express = require('express');
const path = require('path');
const hbs = require('hbs'); */
import express from 'express';
import path from 'path';
import hbs from 'hbs';
import morgan from 'morgan';
import 'dotenv/config';
import {fileURLToPath} from 'url';
import './db/conexion.js';
import { router } from './router/homeRouter.js'


//Ejecutamos express y guardamos el puerto
const PORT = process.env.PORT || 3000;
const app = express();

//__dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares Funciones para ayudar a apuntar a diferentes directorios:: entender json
app.use(morgan('common'));  //dev common combined
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));



//Configuraciones se utilizan con set y van antes de las rutas
//conf handelbars

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//rutas
app.use(router)


//Rutas
/* app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/nosotros', (req, res) =>{
    res.render('nosotros');
}); 
app.get('/especialidad', (req, res) =>{
    res.render('especialidad');
}); 

app.get('/disenos', (req, res) =>{
    res.render('disenos');
}); 

app.get('/productos', (req, res) =>{
    res.render('productos');
});
app.get('/contacto', (req, res) =>{
    res.render('contacto');
}); */


/* app.get('/revestimientos', (req, res) =>{
    res.render('revestimientos');
});  */
/* app.get('/ideas', (req, res) =>{
    res.render('ideas');
});  */


//app en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Aplicacion Activa y trabajando en el Puerto ${PORT}`);
});

// En caso de error me avisa
app.on('error', () => {
    console.log('tenemos un error en la App');
})
