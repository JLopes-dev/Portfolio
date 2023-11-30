import express from 'express';
import database from '../database/dbConnect';
import routesController from '../controllers/RoutesController';
const router = express.Router();
const app = express();

class HttpRoutes {

    private routesConfig() {
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(router)
    }

    private routes() {
        router.post('/product/create', routesController.productCreate)
        router.get('/product/:id', routesController.showOneProduct)
        app.get('/products', routesController.showProducts)
        router.put('/product/update/:id', routesController.updateProduct)
        router.delete('/product/delete/:id', routesController.deleteProduct)
    }

    public startRoutesAndServer() {
        database.connect()
        this.routesConfig()
        this.routes()
        this.server()
    }

    private server() {
        app.listen(3001, () => {
            console.log("Server rodando...")
        })
    }
}

const httpRoutes = new HttpRoutes();
export default httpRoutes;