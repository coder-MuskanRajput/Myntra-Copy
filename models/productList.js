const mongoose = require('mongoose');

// const plm = require("passport-local-mongoose")

const productList = mongoose.Schema({
title:String,
brand:String,
mainCategory:String,
category:String,
subCategory:String,
prdCategory:String,
rating:String,
ratingCount:Number,
price:Number,
images:Array,
productDetails:String,
size:Array,
isSize:String,
emi:String
})

// productList.plugin(plm)
module.exports = mongoose.model('productlists', productList);