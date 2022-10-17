//Creamos constantes y requerimos las liblerias
const express = require('express');
const path = require('path');
const hbs = require('hbs');
//const { join } = require('path');


//Ejecutamos express y guardamos el puerto
const PORT = 3000;
const app = express();


// Middlewares Funciones para ayudar a apuntar a diferentes directorios:: entender json
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Configuraciones se utilizan con set y van antes de las rutas
//conf handelbars




app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//Rutas
app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/nosotros', (req, res) =>{
    res.render('nosotros');
}); 
app.get('/especialidad', (req, res) =>{
    res.render('especialidad');
}); 
app.get('/revestimientos', (req, res) =>{
    res.render('revestimientos');
}); 
app.get('/disenos', (req, res) =>{
    res.render('disenos');
}); 
app.get('/ideas', (req, res) =>{
    res.render('ideas');
}); 
app.get('/productos', (req, res) =>{
    res.render('productos');
});
app.get('/contacto', (req, res) =>{
    res.render('contacto');
});

app.get('/stuccoveneciano', (req, res) =>{
    res.render('stuccoveneciano');
});



//app en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Aplicacion Activa y trabajando en el Puerto ${PORT}`);
});


// En caso de error me avisa
app.on('error', () => {
    console.log('tenemos un error en el espacio');
})
