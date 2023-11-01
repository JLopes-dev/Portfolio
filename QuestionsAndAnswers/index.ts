import { config } from 'dotenv';
import routes from './routes/Routes';

if(process.env.CONFIG === 'prod') config({ path: './config/.env.prod' })
if(process.env.CONFIG === 'dev') config({ path: './config/.env.prod' })

routes.start()