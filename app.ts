import mongo from './database/Mongo'
import routesHandler from './routes/Routes'
import { config } from 'dotenv'

if(process.env.DB_DEV === 'dev') config({path: './config/.env.dev'})
if(process.env.DB_PROD === 'prod') config({path:'./config/.env.prod'})

mongo.mongoConnect(process.env.DB as string).then(() => {
    routesHandler.start()
})