const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

const userRouter = require('./Routers/user.router');
app.use('/users', userRouter);


mongoose.connect(process.env.CONNECTION_STRING , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error :"));
db.once("open", function(){
    console.log("Database connected successfully ...");
})





app.listen(process.env.PORT , ()=>{
    console.log(`app listening on port ${process.env.PORT}`);
})