const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');


//routes vars
const personRoutes = require('./routes/PersonRoutes');
//mongoose promises configuration
mongoose.Promise = global.Promise;

//database connection
mongoose.connect("mongodb://localhost/node-express-api", {
  useMongoClient: true
}).then(db => console.log("Connected to mongodb database", db.name))
  .catch(e => console.log(e));

//settings

app.set("port", process.env.PORT || 8000);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

//server set routes
app.use("/api/person", personRoutes);
//server start
app.listen(app.get("port"), ( )=>{
  console.log("Server running on port", app.get("port"));
});
