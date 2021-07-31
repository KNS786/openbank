var express=require('express');
var router=express.Router();
var path=require('path');
var db=require('../db/createConnection');

router.post('/login',function(req,res){
   var {name,accountno,password }=req.body;
   accountno=Number(accountno);
   var reqParams={name:name,accountno:accountno,password:password};
   var createUser=`INSERT INTO user SET ?`
   db.query(createUser,reqParams,function(err,result){
       if(!err) res.status(200).json({usr:'successfully login'});
       else throw err;
   })


})

router.get('/login',(req,res)=>{
   
   var check=`SELECT * FROM user`;
   db.query(check,(error,rows,fields)=>{
       if(!error){
           res.send(rows);
       }else{
           throw error;
       }
   })

})

module.exports=router;