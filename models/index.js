const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.uri;
//miejsce na dodanie linku do modelu
db.spozywczy = require('./spozywczy.model')(mongoose)

module.exports = db;