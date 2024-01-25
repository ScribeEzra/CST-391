import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import creatureRouter from './Creatures/creatures.routes';
import logger from './Middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';


dotenv.config();


const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);


if (process.env.NODE_ENV == 'development') {
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Biblical Bestiary!<h1/>');
});


app.use('/', [creatureRouter]);

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)

});
