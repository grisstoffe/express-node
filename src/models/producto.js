import mongoose from "mongoose";

const productoSchema= new mongoose.Schema({
    nombre: String,
    precio: Number,
  });

  const Producto = mongoose.model('Producto', productoSchema);

  export { Producto };