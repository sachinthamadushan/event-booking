const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

const eventRoutes = require('./router/eventroutes');
const rs = require('./router/registrationroutes');
const userRoutes = require('./router/userRoute');
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT,
    () => console.log(`Server started on port ${process.env.PORT}`));

app.use('/api/events', eventRoutes);
app.use('/api/registrations/', rs);
app.use('/api/users', userRoutes);