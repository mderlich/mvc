// ---------------------------------------------------------------
// CONSTANTES
const express = require('express');
const router = express.Router();

// ---------------------------------------------------------------
// RUTAS // REQUIRE CONTROLLER
// .comienzan con 'router'
// .ruas carpetas inician con '../'
const mainController = require("../controllers/mainController");
// ---------------------------------------------------------------
// RUTAS
router.get('/',mainController);

// ---------------------------------------------------------------
// EXPORTAMOS
module.exports = router;