const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./router/user.js");
const authRoute = require("./router/auth.js");
const productRoute = require("./router/product.js");
const cartRoute = require("./router/cart.js");
const orderRoute = require("./router/order.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connect successfull!")).catch((err) => console.log(err));

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () =>{
    console.log("Server Backend is Running")
});