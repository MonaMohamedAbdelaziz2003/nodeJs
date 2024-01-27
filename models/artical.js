const mongoose = require("mongoose"); //call library
const schema = mongoose.Schema
const articalschema = new schema({
    titel: String,
    body: String

})
const articale = mongoose.model("Articale", articalschema) //name table , column

module.exports = articale