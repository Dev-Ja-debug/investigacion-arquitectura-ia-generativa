const express = require("express");

const router = express.Router();

const verificarToken = require("../../middlewares/auth.middleware");

const paqueteController = require("./paquete.controller");

// Ruta protegida para obtener paquetes turísticos
router.get(
    "/",
    verificarToken,
    paqueteController.obtenerPaquetes
);

module.exports = router;