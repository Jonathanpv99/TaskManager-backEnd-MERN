import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import router from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import cors from 'cors';

const app = express();

app.use( cors({
    credentials: true
}));

app.use(morgan('dev'));

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
app.use("/api", taskRoutes);

export default app;