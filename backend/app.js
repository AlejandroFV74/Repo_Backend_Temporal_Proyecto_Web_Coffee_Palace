import express from 'express';
import morgan from 'morgan';
//import orderRoutes from './src/routes/orderRoute.js';
import clientRoute from './src/routes/clientRoute.js';

const app = express();

app.use(express.json());       
app.use(morgan('dev'));

app.use('/', express.json(), (req, res, next) => {
    if (req.method === 'GET') return next();
    express.json()(req, res, next);
});

//app.use('/orders', orderRoutes);
app.use('/', clientRoute);


export default app;
