const express = require("express");
const morgan = require("morgan");
const connectWithDb = require("./config/db");
const apiRoutes = require('./routes/api');

require("dotenv").config();
const app = express();

app.use(morgan("tiny"));
app.use(express.json());

// This will connect with DB
connectWithDb();

// Routes
app.use('/api', apiRoutes);


app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
});