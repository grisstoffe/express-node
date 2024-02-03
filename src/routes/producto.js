import { Router } from 'express';
import { deleteProducto, getProducto, postProducto, updateProducto } from '../controllers/producto-controller.js';
const routerProductos = Router();
routerProductos.get('/productos', getProducto);

routerProductos.post('/producto', postProducto);

routerProductos.delete('/producto', deleteProducto);

routerProductos.put('/producto', updateProducto);

export { routerProductos }