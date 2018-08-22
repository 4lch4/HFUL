var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var bodyParser  = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

router.use(function (req,res,next) {
  console.log(req.method + " " + req.url);
  next();
});

router.get("/",function(req,res){
    res.statusCode = 200;
    res.render('mainTemplate', {title: "Index"});
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(80,function(){
  console.log("Live at Port 80");
});