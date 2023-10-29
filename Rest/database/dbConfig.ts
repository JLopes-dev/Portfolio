import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('market', 'root', '@Jplsmvmv88', {
    host: '127.0.0.1',
    dialect: 'mysql'
})
export default sequelize;