const express = require('express');
const app = express();
const puerto = 3000;
app.use(express.static('public'));

// ---------------------------------------------------------------
// RUTAS // REQUIRE ROUTER
const mainRoute = require("./routers/main");
const aboutRoute = require("./routers/about");
// ---------------------------------------------------------------
// RUTAS // VINCULACIONES
app.use('/', mainRoute);
app.use('/about', aboutRoute);



// ---------------------------------------------------------------
// PUERTO
app.listen(process.env.PORT ||  puerto , () => console.log("Listo para ver en (Ctrl + Click)... http://localhost:" + puerto) );

