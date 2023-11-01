import express from 'express'
import database from '../database/databaseConnect'
import routesFunctions from '../controllers/RoutesFunctions'
const app = express()
const router = express.Router()
class Routes {

    public configs() {
        app.set('view engine', 'ejs')
        app.use(express.static('public/stylesheets'))
        app.use(express.urlencoded({ extended: true }))
        app.use(express.json())
        app.use(router)
        app.listen(3001, () => console.log('Server Rodando...'))
    }

    private routes() {
        router.get('/', routesFunctions.renderHome)
        router.post('/create/question', routesFunctions.createQuestion)
    }
    public start() {
        this.configs()
        database.connect()
        this.routes()
    }
}


const routes = new Routes()
export default routes;