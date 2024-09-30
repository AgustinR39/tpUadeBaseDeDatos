export const productos = [
    {
        id: '1',
        nombre: 'Product 1',
        seleccion: 'Evolucion-1',
        nombreComercial: 10,
        precioVenta: 40,
        proveedor: "Marcos",
        precioCompra: 20,
        fotoProducto: "url"
    },
    {
        id: '2',
        nombre: 'Product 2',
        seleccion: 'Evolucion-2',
        nombreComercial: 15,
        precioVenta: 45,
        proveedor: "Daniel",
        precioCompra: 34,
        fotoProducto: "url"
    },
    {
        id: '3',
        nombre: 'Product 3',
        seleccion: 'Evolucion-3',
        nombreComercial: 23,
        precioVenta: 235,
        proveedor: "María",
        precioCompra: 95,
        fotoProducto: "url"
    }
]

export const proveedores = [
    {
        id: "1",
        nombre: 'Marcos',
        cuit: 42358
    },
    {
        id: "2",
        nombre: 'Daniel',
        cuit: 25468
    },
    {
        id: "3",
        nombre: 'María',
        cuit: 32975
    }
]

export const clientes = [
    {
        id: "1",
        nombre: "Gastón",
        cuit: 23679
    },
    {
        id: "2",
        nombre: "Rodrigo",
        cuit: 23312
    },
    {
        id: "3",
        nombre: "Manuel",
        cuit: 24512
    }
]

export const pokemon = [
    {
        name: "Charmander",
        precio: 62,
        img: "img"
    },
    {
        name: "Ivysaur",
        precio: 142,
        img: "img"
    },
    {
        name: "Charizard",
        precio: 267,
        img: "img"
    }
]

export const pedidos = [
    {
        id: "01",
        productoSelect: "Charmander",
        cliente: "Gastón",
        fechaDeCarga: "11/07/2024",
        fechaDeEntrega: "14/07/2024",
        saldoTotal: "62"
    },
    {
        id: "02",
        productoSelect: "Ivysaur",
        cliente: "Rodrigo",
        fechaDeCarga: "11/07/2024",
        fechaDeEntrega: "15/07/2024",
        saldoTotal: "142"
    },
    {
        id: "03",
        productoSelect: "Charizard",
        cliente: "Manuel",
        fechaDeCarga: "11/07/2024",
        fechaDeEntrega: "17/07/2024",
        saldoTotal: "267"
    }
]