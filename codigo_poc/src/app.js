require("dotenv").config();

const express = require("express");

const paqueteRoutes = require("./modules/paquetes/paquete.routes");

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API de Agencia de Turismo funcionando correctamente."
    });
});

// Rutas de paquetes turísticos
app.use("/api/paquetes", paqueteRoutes);

// Middleware global de errores
app.use((err, req, res, next) => {
    console.error("Error del servidor:", err);

    res.status(500).json({
        success: false,
        message: "Error interno del servidor."
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

module.exports = app;
