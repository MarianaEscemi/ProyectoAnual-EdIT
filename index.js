

//Requerimos las liblerias
import express from 'express';
import path from 'path';
import hbs from 'hbs';
import morgan from 'morgan';
import 'dotenv/config';
import {fileURLToPath} from 'url';
import './db/conexion.js';
import mongoose from 'mongoose';
import { router } from './router/homeRouter.js';



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
app.use(express.urlencoded({extended: false}))


//Configuraciones se utilizan con set y van antes de las rutas
//conf handelbars

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//rutas
app.use(router)


//app en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Aplicacion Activa y trabajando en el Puerto ${PORT}`);
});

// En caso de error me avisa
app.on('error', () => {
    console.log('tenemos un error en la App');
})
