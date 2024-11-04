import {connectDB} from './config/database.js'
//const connectDB = require('./config/database');
//const app = require('./app');
import app from './app.js'


connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
