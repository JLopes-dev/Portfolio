import express, { Request, Response } from 'express'
import routesFunctions from '../controllers/UserController'
const router = express.Router()
const app = express()
const PORT = 3001

class RoutesHandler {
    private routes() {
<<<<<<< HEAD
        router.post('/createUser', routesFunctions.createUser)
        router.get('/showUser/:userName', routesFunctions.showOneUser)
        router.get('/showAllUsers', routesFunctions.showAllUsers)
        router.put('/updateUser/:userName', routesFunctions.updateUser)
        router.delete('/deleteUser/:userName', routesFunctions.deleteOneUser)
=======
        router.post('/createUser', routesFunctions.postFunction)
        router.get('/showUser/:userName', routesFunctions.getFunction)
        router.put('/updateUser/:userName', routesFunctions.updateFunction)
        router.delete('/deleteUser/:userName', routesFunctions.deleteFunction)
        router.post('/auth', routesFunctions.auth)
>>>>>>> 6e1544cf75a7f031a51b7ee603a387611f0ff69f
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