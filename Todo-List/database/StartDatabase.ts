import express from 'express';
import database from './conn';

const app = express();
class StartDatabase {

    private run() {

    database.sync()
        .then(() => console.log("Sequelize..."))
        .catch(err => console.log("error " + err))
    }

    private databaseConfig() {
        app.use(express.static('public'))
    }
    public configStart() {
        this.run()
        this.databaseConfig()
    }
}

const startDatabase = new StartDatabase();
export default startDatabase