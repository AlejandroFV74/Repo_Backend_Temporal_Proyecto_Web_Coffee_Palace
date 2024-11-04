const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());       
app.use(morgan('dev'));

const orderRoutes = require('./src/routes/orderRoute'); 
app.use('/orders', orderRoutes);
const clientRoute = require('./src/routes/clientRoute')
app.use('/', clientRoute);


module.exports = app;
