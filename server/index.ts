import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import fileUpload from 'express-fileupload';

//Importar rutas
import router from './src/routes'


class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir : '/tmp/',
            limits: { fileSize: 50 * 1024 * 1024 },
        }));
    }

    routes(): void {
        this.app.use('/api/v1', router);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
