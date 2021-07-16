const express = require("express");
const app = express();
const connectDB = require('./config/db');

connectDB();







const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT} in ${process.env.NODE_ENV} mode`)
})