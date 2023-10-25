import express from 'express';
import database from '../database/conn';

const app = express();
class ServerConfigs {

    private startDatabaseAndServer() {
        app.listen(3000, () => {
            console.log("Server Rodando!")
        })
    database.sync()
        .then(() => console.log("Sequelize..."))
        .catch(err => console.log("error " + err))
    }

    private outrasConfigs() {
        app.use(express.static('public'))
    }
    public configStart() {
        this.startDatabaseAndServer()
        this.outrasConfigs()
    }
}

const serverConfigs = new ServerConfigs();
export default serverConfigs