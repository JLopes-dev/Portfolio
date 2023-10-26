import express from 'express'
import routesFunctions from '../controllers/RoutesFunctions'
import startDatabase from '../database/StartDatabase'

const router = express.Router()
const app = express()

class TodoRoutes {

    private routesConfig() {
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(express.static('public'))
        app.use(router)
        app.set("view engine", "ejs")
    }

    private crudRoutes() {
        router.get('/', routesFunctions.renderHome)
        router.post('/createtask',routesFunctions.createQuest)
        router.get('/showtask', routesFunctions.showQuest)
    }
    public startRoutes() {
        startDatabase.configStart()
       this.routesConfig()
       this.crudRoutes()
       app.listen(3001, () => {
        console.log("Server Rodando!");
        
       })
    }
}
const todoRoutes = new TodoRoutes();
export default todoRoutes;