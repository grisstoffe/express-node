import express from 'express';
import bodyParser from 'body-parser';
import { routerProductos } from '../routes/producto.js';
import dotenv from 'dotenv';
import { main } from '../database/config.js';

dotenv.config();


class Server {//railway, digitalocean, heroku
    constructor() {
        this.app = express();
        this.middlewares();
        this.connectDB();
        this.routes();
    }

    middlewares(){
        this.app.use(bodyParser.json());
    }

    routes(){
        this.app.get('', (req,res)=> { res.send("aplicacion ejecutandose")});
        this.app.use('/api', routerProductos)
    }
    async connectDB() {
        await main();
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('SERVIDOR CORRIENDO');
        })
    }
}

export { Server }