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

// API
app.get('/getResponse', (req, res) => { // req = request, res = response. Esta es una forma de definir funciones es javascript
    //res.send('Hello from API');
    res.json(
        {
            "name": "Gregory",
            "age": 20
        }
    )
});

// Execute server
app.listen(app.get('port'), () => {
    console.log('Server is working!!');
});