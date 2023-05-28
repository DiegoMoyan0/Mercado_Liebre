const express = require("express");
const app = express();
const path = require("path");

// Requerimos las rutas de las vistas//
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');

//resuelve y devuelve la ruta absoluta del directorio "public" en relación con el directorio actual (__dirname).//
const publicPath = path.join(__dirname, "./public");
//------Accedo a recursos estaticos (que no se renderizan: img, css, etc) -----//
app.use(express.static(publicPath))

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

//Implemento o uso las rutas con express//
app.use(mainRoutes);
app.use('/user', userRoutes);
app.use('/product', productsRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () =>console.log("servidor corriendo en el puerto ${port}"));
