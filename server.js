require('dotenv').config();
const express = require("express")
const cors = require("cors");
const path = require("path");
const app = express();
const contactRoute = require("./Route/contactRoute.jsx")



//MW
app.use(express.json(), cors())


app.use("/", contactRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`You are connected to Port ${PORT}`));