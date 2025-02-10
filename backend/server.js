require("dotenv").config({path:'./.env'});
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDb connected with the server")).catch(err=>console.log(err));


app.use(cors());

app.listen(process.env.PORT,() => {
    console.log("Server is started on the port")
})