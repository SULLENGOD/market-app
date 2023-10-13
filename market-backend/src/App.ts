import express, { Application } from 'express';
import tickers from './routes/tickers.routes';
import cors from 'cors';
import morgan from 'morgan';
const app: Application = express();

app.set('port', process.env.PORT);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(tickers);

export default app;