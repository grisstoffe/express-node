import { Producto } from "../models/producto.js";

const getProducto = async (req, res) => {
    let datos;
    try {
        datos = await Producto.find({});
    } catch (error) {
        console.log(error,'ocurrio un error al traer los datos');
        res.status(400).json({
            msg: "no se pudo traer los datos",
            ok: false,
        })
    }
    res.status(200).json({
        msg: "obtener productos-get",
        datos: datos,
        ok: true,
    })
}

const postProducto = async (req, res) => {
    //post- Interactuar BD(CREAR)
    const { nombre, precio } = req.body;
    const usuario = new Producto({
        nombre: nombre,
        precio: precio
    })
    try {
        await usuario.save();

    } catch (error) {
        console.log(error,'Ocurrio un error al guardar en la BD');
        res.status(400).json({
            msg: "ocurrio un error",
            ok: false,
        })

    }

    res.status(200).json({
        msg: "crear productos-POST",
        ok: true,
    })
}

const deleteProducto = (req, res) => {
    //DELETE- Interactuar BD(DELETE)
    const { idProducto } = req.body;
    res.status(200).json({
        msg: "eliminar productos-DELETE",
        ok: true,
    })
}

const updateProducto = (req, res) => {
    //PUT- Interactuar BD(PUT)
    const { idProducto, nombre, precio } = req.body;
    res.status(200).json({
        msg: "actualizar producto-PUT",
        ok: true,
    })
}


export { getProducto, postProducto, deleteProducto, updateProducto }
