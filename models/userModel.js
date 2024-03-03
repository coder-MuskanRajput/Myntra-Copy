const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

const user = mongoose.Schema({
    username: {
        type:String,
        required: true,
    },
    email :{
        type:String,
        required :true,
    },
    // password :{
    //     type:String,
    //     required: true
    // },
    // _id :{type: mongoose.Schema.Types.ObjectId},
    wishlists:[{type : mongoose.Schema.Types.ObjectId , ref : "productlists"}],
    addCart:[{type : mongoose.Schema.Types.ObjectId , ref : "productlists"}],
    forgetPasswordToken : {
        type:Number,
        default : -1
    },
}, {timestamp:true})

user.plugin(plm);
module.exports = mongoose.model('user', user);