import express from 'express'
import routesFunctions from '../controllers/RoutesFunctions'
import serverConfigs from '../controllers/ServerConfigs'

const router = express.Router()
const app = express()

class TodoRoutes {

    private routesConfig() {
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(router)
        app.set("view engine", "ejs")
    }

    private crudRoutes() {
        router.get('/', routesFunctions.renderHome)
        router.post('/createtask', routesFunctions.createQuest)
        router.get('/showquest', routesFunctions.showQuest)
    }
    public startRoutes() {
        serverConfigs.configStart()
       this.routesConfig()
       this.crudRoutes()
    }
}
const todoRoutes = new TodoRoutes();
export default todoRoutes;