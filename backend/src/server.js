const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://omnistack09:omnistack@omnistack09.p3vai.mongodb.net/omnistack09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(3333);
