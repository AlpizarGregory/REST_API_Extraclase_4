const express = require('express'); // Se guarda el módulo en una constante
const morgan = require('morgan'); // Se guarda el módulo en una constante

const app = express(); // Inicia el servidor

// config
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // mensajes sencillos

// API
app.get('/getResponse', (req, res) => { // req = request, res = response. Esta es una forma de definir funciones es javascript
    res.send('Hello from API');
});

// Execute server
app.listen(app.get('port'), () => {
    console.log('Server is working!!');
});