const paqueteRepository = require("./paquete.repository");

const obtenerPaquetes = async (req, res, next) => {
    try {
        const paquetes = await paqueteRepository.obtenerTodos();

        return res.status(200).json({
            success: true,
            total: paquetes.length,
            data: paquetes
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    obtenerPaquetes
};