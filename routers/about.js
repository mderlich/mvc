// ---------------------------------------------------------------
// CONSTANTES
const express = require('express');
const router = express.Router();

// ---------------------------------------------------------------
// RUTAS // REQUIRE CONTROLLER
// .comienzan con 'router'
// .ruas carpetas inician con '../'
const aboutController = require("../controllers/aboutController");
// ---------------------------------------------------------------
// RUTAS
router.get('/',aboutController);

// ---------------------------------------------------------------
// EXPORTAMOS
module.exports = router;