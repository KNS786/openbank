var express=require('express');
var router=express.Router();
var jwt=require('jsonwebtoken');
var db=require('../db/createConnection')
var ensureToken=require('../middleware/ensureToken')

router.post('/signup', function(req,res){
    var Data=req.body;

    Data.accountno=Math.random()*10000000000000000;
    var newUser={
        name:Data.name,
        email:Data.email,
        phoneno:Data.phoneno,
        password:Data.password,
        accountno:Data.accountno
    }

    db.query('SELECT * FROM `user` WHERE `name`=? AND `email`=?',[Data.name,Data.email],function(error,result){
         if(result.length==0){
            db.query(`INSERT INTO user SET ?`,newUser,function(errors,results){
                if(results) {
                    var token=jwt.sign({newUser},"my_secret_key");
                    res.status(200).json({token:token})
                   // res.status(200).json({user:Data});
                }
                else throw errors;
            })
         }else{
             res.status(200).json({err:'already existes user '})
         }

    } )
})

router.get('/user',ensureToken,function(req,res){
       jwt.verify(req.token,"my_secret_key",function(error,data){
           if(error) res.status(403);
           else res.status(200).json({
                 msg:'this is protoctored',
                 user:data
                });

       })
})



module.exports=router;