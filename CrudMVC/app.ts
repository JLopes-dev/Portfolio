import mongo from './database/Mongo'
import routesHandler from './routes/Routes'
import { config } from 'dotenv'

if(process.env.DB_DEV === 'dev') config({path: './config/.env.dev'})
if(process.env.DB_PROD === 'prod') config({path:'./config/.env.prod'})

mongo.mongoConnect("mongodb+srv://JotaPe8:jplsmvmv88@portfolio.tssumsq.mongodb.net/?retryWrites=true&w=majority").then(() => {
    routesHandler.start()
}) 