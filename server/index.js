const express=require('express');
const mongoose=require('mongoose'),
session = require('express-session');
var passport = require("passport"),
passportLocalMongoose = require("passport-local-mongoose");

const bodyParser=require('body-parser');
var nodemailer = require('nodemailer');

const app=express();

app.use(bodyParser.urlencoded({
  extended:true
}));



app.use(express.static('public'));

app.use(session({
  secret: 'Me And Kanishk Bro Love Node and React JS',
  resave: false,
  saveUninitialized: false,
}));


app.use(passport.initialize());
app.use(passport.session());



// --------- MongoDB Start ---------
const uri = "mongodb://localhost:27017/GU_Database";
mongoose.connect(uri)

const DetailSchema=new mongoose.Schema({
  username:String,
  password:String,
  email:String
});

DetailSchema.plugin(passportLocalMongoose)

const Details=mongoose.model("Details",DetailSchema)


passport.use(Details.createStrategy());
passport.serializeUser(Details.serializeUser());
passport.deserializeUser(Details.deserializeUser());




// ------------ MongoDB End ----------





// ------------ Node Email Service START ----------

// transport: {
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'contact@gmail.com',
//     pass: 'app password',
//   },
// }

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kkanishkcs@gmail.com',
    pass: 'fdjdjrcuhgpqjzoj'
  }
});

var mailOptions = {
  from: 'kkanishkcs@gmail.com',
  to: 'rockharshitmaurya@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hey ! its Working Kanishk Bhai '
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// ------------ Node Email Service End ----------


// ------------ GET Routes Start ----------

app.get("/login", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get("/profile", (req, res) => {
  if(req.isAuthenticated()){
  res.send("This is secret Page");
  }else{
    res.redirect("/login")
  }
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + '/public/sign-up.html');
});

// ------------ GET Routes End ----------


// ------------ POST Routes Start ----------

app.get("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});


app.post("/login",function(req,res){

  var username=req.body.username;
  var password=req.body.password;

  const user=new User({
    username:req.body.username,
    pwd:req.body.password
  })
  res.send(user)
})

app.post("/register",function(req,res){
  console.log(req)
  var username=req.body.username;
  var password=req.body.password;
  var email=req.body.email;
  var cpassword=req.body.cpassword;
  const user=new Details({
    username:username,
    password:password,
    email:email
  })
  Details.register(user,password,function(err,user){
    if(err){
      console.log('Error')
      res.redirect('/register')
    }else{
        passport.authenticate('local')(req,res,function(){
          res.redirect('/profile')
        })
    }
  })
  // user.save(function(err,result){
  //     if (err){
  //       res.redirect('https://unblast.com/wp-content/uploads/2019/06/404-Error-Page-Donut-Template.jpg')
  //     }
  //     else{
  //         res.send('successfully registered , please check upur email to confirm your account verification')
  //     }
  // })
})

// ------------ POST Routes Start ----------

app.listen(8080,function(){
  console.log("Server started listening on porn 8080")
});
