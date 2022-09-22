const express = require("express");
const app = express();
const serviceRoute = require("./Routers/serviceRouter");
const connectDB = require('./configs/db')
require("dotenv").config();
const port = process.env.PORT;

// connect db
// connectDB()
require('./configs/db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", serviceRoute);

app.listen(port, () => {
  console.log(`server run is http://localhost:${port}`);
});
