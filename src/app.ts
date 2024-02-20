import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { SETTINGS } from './config/settings';
import chatRoute from './routes/chat-route';

const app = express();
app.set('port', SETTINGS.PORT);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(chatRoute);

export default app;
