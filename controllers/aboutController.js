// ---------------------------------------------------------------
// CONSTANTES
const express = require('express');
const router = express.Router();
const path = require('path');

// ---------------------------------------------------------------
// RUTAS // OBS.
// .comienzan con 'router'
// .ruas carpetas inician con '../'
router.get('/', (req, res) => { 
    res.sendFile( path.join(__dirname, '../views/about.html') ); 
});

// ---------------------------------------------------------------
// EXPORTAMOS
module.exports = router;