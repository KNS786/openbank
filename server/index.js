var express=require('express');
var app=express();

var bodyParser=require('body-parser')


app.get('/',function(req,res){
    res.send("hwello "); 

})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//user action 
app.use('/',require('./routes/login'));
app.use('/',require('./routes/account'));
app.use('/',require('./routes/bankers'));
app.use('/',require('./routes/signup'));

app.listen(7000,function(req,res){
    console.log("app running")
})
