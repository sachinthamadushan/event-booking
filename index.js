const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();
const eventRoutes = require('./router/eventroutes');
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT,
    () => console.log(`Server started on port ${process.env.PORT}`));

app.use('/api/events', eventRoutes);