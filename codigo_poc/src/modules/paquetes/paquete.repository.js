const paquetes = [
    {
        id: 1,
        nombre: "Tour Galápagos",
        destino: "Islas Galápagos",
        precio: 850.00,
        duracion: "5 días",
        disponibilidad: 15
    },
    {
        id: 2,
        nombre: "Aventura en Baños",
        destino: "Baños de Agua Santa",
        precio: 250.00,
        duracion: "3 días",
        disponibilidad: 20
    },
    {
        id: 3,
        nombre: "Ruta del Spondylus",
        destino: "Costa ecuatoriana",
        precio: 450.00,
        duracion: "4 días",
        disponibilidad: 10
    },
    {
        id: 4,
        nombre: "Tour Amazonía",
        destino: "Tena",
        precio: 380.00,
        duracion: "3 días",
        disponibilidad: 12
    }
];

const obtenerTodos = async () => {
    return paquetes;
};

module.exports = {
    obtenerTodos
};