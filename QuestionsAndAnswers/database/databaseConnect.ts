import sequelize from "./databaseConfig";
class databaseConnect {
    public connect() {
        sequelize.sync({ force: true })
        .then(() => console.log('Database connected...'))
        .catch((err) => console.log(' error: ' + err))
    } 
}

const database = new databaseConnect()
export default database;