import express, { Request, Response } from 'express'
import routesFunctions from '../controllers/UserController'
const router = express.Router()
const app = express()
const PORT = 3001

class RoutesHandler {
    private routes() {
        router.post('/createUser', routesFunctions.createUser)
        router.get('/showUser/:userName', routesFunctions.showOneUser)
        router.get('/showAllUsers', routesFunctions.showAllUsers)
        router.put('/updateUser/:userName', routesFunctions.updateUser)
        router.delete('/deleteUser/:userName', routesFunctions.deleteOneUser)
        app.use(router)
        app.use((req: Request, res: Response) => {
            res.send({ err: 'Rota não existente!' })
        }) 
    }
    public start() {
        this.routesConfig()
        this.routes()
        app.listen(PORT, () => console.log(`Server Rodando na porta ${PORT}`))
    }
    private routesConfig() {
        app.use(express.json())
    }
}
const routesHandler = new RoutesHandler()
export default routesHandler