const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path')

//dotenv config
dotenv.config();    //root main path specify nhi krna hota hai kisse folder ke andr hoga tho specify krni hoge ./< kha pr name>

//mongodb connection this must be done after dotenv config
connectDB();

//rest object creation
const app = express(); //express ki sari functionality app name ke varaible main store ho chuki hai

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
//1 test route
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'));
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'));
app.use('/api/v1/admin', require('./routes/adminRoutes'));

//STATIC FOLDER
app.use(express.static(path.join(__dirname, './client/build')))

//STATIC ROUTES
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//port creation 
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`.bgBlue.white);
});