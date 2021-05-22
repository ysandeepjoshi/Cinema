const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//set up DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection has been established successfully");
})


const movieRouter = require('./routes/movies');
app.use('/movies',movieRouter);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})


