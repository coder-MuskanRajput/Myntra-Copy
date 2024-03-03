var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const productList = require('../models/productList');
const USER = require("../models/userModel")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const nodemailer = require("nodemailer");
passport.use(new LocalStrategy(USER.authenticate()));
const session = require("express-session");
const userModel = require('../models/userModel');
const Razorpay = require('razorpay');
const { uuid } = require('uuidv4');

var instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user  &&  req.user.id);
  res.render('index', { title: 'Express' , user: req.user });
});

router.get('/men', function(req, res, next) {
  console.log("error");
  res.render('men', { title: 'Express' , user: req.user });
});

router.get('/list/:item/:category', async function(req, res, next){
  const pdList = await productList.find();
  let category = [];
  let mainCate = req.params.category;
  let productL = [];
  let productCount = 0;
  pdList.forEach(async function(element, i) {
    if(element.category.includes(req.params.item) || element.mainCategory.includes(req.params.item)){
      {
        if(element.subCategory.toLowerCase().includes(req.params.category.toLowerCase())){
          productL.push(element)
          productCount ++;
        }
      }
    }
  });
  res.render('categoryShow',{category:category, subCategory:(req.params.item + " "+ req.params.category), mainCate:mainCate,productL:productL, productCount:productCount , user: req.user})
})


router.get('/allItem/:item/:category', async function(req, res, next){
  const pdList = await productList.find();
  let category = [];
  let mainCate = req.params.category;
  let productL = [];
  let productCount = 0;
  pdList.forEach(async function(element, i) {
    if(element.category.includes(req.params.item) || element.mainCategory.includes(req.params.item)){
      {
        if(element.prdCategory) { 
        if(element.prdCategory.toLowerCase().includes(req.params.category.toLowerCase())){
          productL.push(element)
          productCount ++;
        }
      }
      }
    }
  });
  res.render('categoryShow',{category:category, subCategory:(req.params.item + " "+ req.params.category), mainCate:mainCate,productL:productL, productCount:productCount, user: req.user})
})

router.get('/women',function(req,res,next){
  res.render('women',{title: 'Express', user: req.user});
})

router.get('/kids',function(req,res,next){
  res.render('kids',{title: 'Express', user: req.user});
})

router.get('/home&living' ,(req,res,next)=>{
  res.render('home&living',{user: req.user})
})


router.get('/beauty',async function(req,res,next){
  // res.render('product')
  const pData = await productList.find()
  const productL = pData.filter((p)=>{
      if(p.mainCategory === "BEAUTY"){
          return p;
      }
  })
  res.render('categoryShow',{category:"beauty", subCategory:"personal care", mainCate:"Home",productL:productL, productCount:productL.length , user: req.user})

})



router.get('/login', function(req,res,next){
  if(req.session.messages){
  console.log(req.session.messages);
  req.session.messages = null;
  }
  res.render('login',{ user: req.user} )
  res.send({userId : req.user._id})
})

router.post('/login', 
 passport.authenticate("local",{
  successRedirect:"/",
  failureRedirect:"/login",
  failureMessage:true,
  successMessage: true
 }),
function(req,res,next){
  
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    next();
  }
  else{
    res.redirect("/login");
  }
}

router.get('/signup', function(req,res,next){
  res.render('signup' ,{ user: req.user})
})

router.post('/signup',async function(req,res,next){
  try {
    await USER.register({username: req.body.username , email: req.body.email }, req.body.password);
    res.redirect("/login");
    // toast.success("Account registered Successfully");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

router.get("/signout" , isLoggedIn , function(req,res,next){
  req.logout(()=>{
    res.redirect("/login")
  })
})                          

//Mail Function

 async function sendMailer (req, res, user,otp){
   
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
  });
  
  const mailOptions = {
    from: "muskanrajput1510@gmail.com>",
    to: user.email,
    subject: "Reset password otp",
    // text: req.body.message,
    html: `<h1>OTP : ${otp}</h1>`,                           
  };
  
  transport.sendMail(mailOptions, (err, info) => {
    if(err){
      console.log("mail error" , err)
      res.send(err)
    }
    else{
      return;
    }
  });
  
 }

router.get("/forget" , function(req,res,next){
  res.render("forget", {user: req.user})
})

router.post("/forget" , async function(req,res,next){
    try {
      const forgetUser = await USER.findOne({email: req.body.email})
      if(!forgetUser){
        res.redirect("/forget")
      }
      else{
      const otp =  Math.floor(1000 + Math.random() * 9000)
      forgetUser.forgetPasswordToken = otp;
      sendMailer(req,res,forgetUser , otp)
      .then(async()=>{
        await forgetUser.save()
        res.render("otp" ,{otpResponse : "" , email : forgetUser.email ,user: req.user})
      })
      .catch((error)=>{
        console.log("error in mail" , error);
        res.send(error)
      })
    }
    } catch (error) {
      console.log(" forget otp  ka error" , error)
      res.send(error);
    }
})

// Match otp 

router.post("/matchOtp/:email" , async function(req,res,next){
  try {
    const forgetUser = await USER.findOne({email : req.params.email})
    if(!forgetUser){
      res.redirect("/forget")
    }
else{
    if(forgetUser.forgetPasswordToken == req.body.otp)
    {
     forgetUser.forgetPasswordToken = -1;
     await forgetUser.save();
     res.render("resetPassword",{email:forgetUser.email , user: req.user})
    }
    else{
      res.render("otp" ,{otpResponse : "Invalid OTP , Try Again" , email:forgetUser.email , user: req.user })
    //  res.send("Invalid OTP, Try Again") 
    }
  }
  } catch (error) {
    console.log("otp check kro" , error)
    res.send(err)
  }
})

// reset Password 

router.post("/resetPassword/:email", async function(req,res,next){
  try {
    const user = await USER.findOne({email:req.params.email})
    await user.setPassword(req.body.password , async function(err,info){
      if(err){
        console.log(err)
        res.send(err)
      }
      else{
        await user.save();
        res.redirect("/login")
      }

    });
    user.forgetPasswordToken = -1;
  } catch (error) {
    console.log(" reset password Error" , error)
    res.send(err)
  }
})

router.get('/product/:id',async (req, res, next)=>{
  const prdctData = await productList.findById(req.params.id)
  let discount = priceDiscount(prdctData.price)
  res.render('product',{product:prdctData, discount:discount, user: req.user})
})

router.post('/searchInp', async (req, res)=>{
  try {
    const pData = await productList.find()
  const searchData = pData.filter((prd)=>{if(prd.title.toLowerCase().includes(req.body.title.toLowerCase())){return prd}});
    res.send(searchData)
  } catch (error) {
    res.send('not found')
    console.log(error)
  }
})

router.get("/wishlist" ,isLoggedIn, async function(req,res,next){
  const userId = await userModel.findById(req.user._id).populate("wishlists");
  console.log(userId);
  res.render("wishlist" , {user: req.user , wishlists : userId.wishlists});
})

router.post("/likedProduct/productList/:id" , isLoggedIn, async function(req,res,next){
  const  userId  = await userModel.findById(req.user._id)
  const productId = await productList.findById(req.params.id)
  // res.send("route hit")
  const isProduct = userId.wishlists.findIndex((elem)=>(elem.toString() === req.params.id))
  if(isProduct !== -1){
       userId.wishlists.splice(isProduct , 1)
       await userId.save()
       console.log(isProduct , "remove");
       res.send("remove product")
  }
  else{
    userId.wishlists.push(req.params.id)
    await userId.save()
    res.send("add product")
  }
})

router.get("/cart" , isLoggedIn , async function(req,res,next){
  const userId = await userModel.findById(req.user._id).populate("addCart");
  res.render("cart" , {user : req.user , addCart : userId.addCart})
})

router.get("/addProduct/productList/:id" , isLoggedIn, async function(req,res,next){
  const  userId  = await userModel.findById(req.user._id)
  const productId = await productList.findById(req.params.id)
  // res.send("route hit")
  const isProduct = userId.addCart.findIndex((elem)=>(elem.toString() === req.params.id))
  if(isProduct !== -1){
       res.redirect(`/product/${req.params.id}`)
  }
  else{
    userId.addCart.push(req.params.id)
    await userId.save()
    res.redirect(`/product/${req.params.id}`)
  }
})

router.get("/removeFromCart/:id" , isLoggedIn , async function(req,res,next){
  const  userId  = await userModel.findById(req.user._id)
  const productId = await productList.findById(req.params.id)
  const isProduct = userId.addCart.findIndex((elem)=>(elem.toString() === req.params.id))
  if(isProduct !== -1){
       userId.addCart.splice(isProduct , 1)
       await userId.save()
       console.log(isProduct , "remove");
       res.redirect(`/cart`)
  }
})

router.get('/success', function(req, res, next) {
  res.render('success', { title:'Express' });
});

router.post('/create/orderId', function(req, res, next) {
  console.log(req.body.amount);
  var options = {
    amount: req.body.amount ,  // amount in the smallest currency unit
    currency: "INR",
    receipt: uuid()
  };
  instance.orders.create(options, function(err, order) {
    console.log(err);
    res.send(order)
  });
});

router.post('/api/payment/verify/:id', async function(req,res){
  let razorpayPaymentId = req.body.response.razorpay_payment_id
  let razorpayOrderId = req.body.response.razorpay_order_id;
  let signature = req.body.response.razorpay_signature;
  let secret = process.env.KEY_SECRET;
  const  userId  = await userModel.findById(req.user._id)
  const isProduct = userId.addCart.findIndex((elem)=>(elem.toString() == req.params.id))

  
var { validatePaymentVerification, validateWebhookSignature } = require('../node_modules/razorpay/dist/utils/razorpay-utils');

const result = validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);

if(result){
if(isProduct !== -1){
  userId.addCart.splice(isProduct , 1)
  await userId.save()

}
console.log(isProduct,"isProduct",req.params.id);
}
res.send(result)

})


// function to implement price discount

function priceDiscount(price){
  if(price < 500){
    return 0;
  } else if (price > 499 && price < 1000){
    return 40;
  } else if(price > 999 && price < 1500){
    return 50;
  } else if (price > 1400 && price < 2500){
    return 62;
  } else if (price > 2499 && price < 5000) {
    return 68;
  } else if(price > 4999 && price < 10000){
    return 73;
  } else if(price > 9999){
    return 78;
  }
}
module.exports = router;