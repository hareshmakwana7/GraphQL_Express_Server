var mongoose = require("../config/dbUrl");
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    Username:{type:String},
    Email:{type:String},
    Password:{type:String},
    Phone:{type:String},
});

module.exports= mongoose.model("users",UserSchema);
