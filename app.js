const express = require('express');
const app = express();
app.use(express.json());

const librosRouter = require('./routes/libros'); //variable de importacion de Router de libros

const errorHandler = require('./middlewares/errorHandler'); //Importamos el Middleware Error Handler

app.use('./routes/libros', librosRouter);

app.use(errorHandler);

app.listen(3000,() => {
    console.log(`Servidor iniciado en el puerto 3000`);
});

