require("dotenv").config({path:'./.env'});
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const UserRoutes = require("./routes/UserRoutes")
const ProductRoutes = require("./routes/ProductRoutes")
const OrderRoutes = require("./routes/OrderRoutes")

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("MongoDb connected with the server")).catch(err=>console.log(err));


app.use("/api/users",UserRoutes);
app.use("/api/products",ProductRoutes);
app.use("/api/orders",OrderRoutes);



app.listen(process.env.PORT,() => {
    console.log("Server is started on the port")
})