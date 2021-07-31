var express=require('express');
var router=express.Router();
var db=require('../db/createConnection')

router.post('/bankers-login',function(req,res){
    var {username,password}=req.body;
    var createBankers={username:username,password:password};
    var Bankers=`INSERT INTO bankers SET ?`;
    db.query(Bankers,createBankers,function(error,result){
        if(!error) res.status(200).json({msg : "successfully login banker"});
        else throw error;
    })
})

router.get('/bankers-login',function(req,res){
    var check='SELECT * From banker';
    db.query(check,function(error,rows,fields){
        if(!error) res.send(rows);
        else console.log("something wrong");

    })
    
})

module.exports = router;