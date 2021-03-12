var mogoose = require("mongoose");

var Schema = mogoose.Schema;
var PostSchema = mogoose.Schema({
    user:String,
    email:String,
    image:String,
    message:String,
    publicationdate:{type:Date, default:Date.now}

});

module.exports = mogoose.model("Post", PostSchema);
