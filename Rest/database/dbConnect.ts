import sequelize from "./dbConfig";

class dbConnect {

    public connect() {
        sequelize.sync()
            .then(() => console.log('Conectado ao MySql...'))
            .catch((err) => console.log(` error: ${err}`))
    }
}

const database = new dbConnect();
export default database;