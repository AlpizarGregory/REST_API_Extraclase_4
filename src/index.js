const express = require('express'); // Se guarda el módulo en una constante
const morgan = require('morgan'); // Se guarda el módulo en una constante

const app = express(); // Inicia el servidor

// config
app.set('port', 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // mensajes sencillos
app.use(express.json());

// API => dominio/api/getResponse por convención
app.use('/api', require('./routes/rt'));


// Execute server
app.listen(app.get('port'), () => {
    console.log('Server is working!!');
});