const goods = require("./routes/goods");
const menu = require("./routes/menu");
require("dotenv").config();
const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

let port = process.env.PORT;
let host = process.env.HOST;
console.log(port);
mongoose.connect(`mongodb://${host}/shop`)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/menu', menu);
app.use("/api/goods", goods);

app.listen(port, host, () => {
  console.log(`Server is listening ${host}:${port}`);
});