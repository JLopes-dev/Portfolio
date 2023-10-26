import dotenv from 'dotenv';
import todoRoutes from "./routes/TodoRoutes";
if(process.env.DB === 'dev') dotenv.config({path: './config/.env.dev'})

todoRoutes.startRoutes()