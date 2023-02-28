const mongoose = require("mongoose");
mongoose.Promise = Promise;
let db;

if (process.env.MONGO_URI) {
db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
 console.log("Production Database Connection Successful")
} else {
db = mongoose.connect("mongodb://localhost/projectbook", { useNewUrlParser: true, useUnifiedTopology: true })
  console.log("Development Database Connection Successful")
    };

module.exports = db;