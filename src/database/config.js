
import mongoose from 'mongoose';


async function main() {
    try {
        await mongoose.connect(process.env.DB_MONGO_CONNECT);
        console.log("Conexion con BD correcta");
    } catch (error) {
        console.log(error);
        console.log("ocurrio un error en la conexion con DB");
    }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export { main }