var express=require('express');
var router=express.Router();
var db=require('../db/createConnection')

//create account
router.post('/account',function(req,res){
    var body=req.body;
    var customer={name:body.name,accountno:Number(body.accountno),
        secretkey:Number(body.secretkey),
        balanceAmt:Number(body.balanceAmt)
    }
    var createAccount=`INSERT INTO customers SET ?`;
    db.query(createAccount,customer,function(error ,result){
        if(!error) return res.status(200).json({customer:customer});
        else throw error;
    })  

})


//get 
router.get('/account',function(req,res){
    var check=`SELECT * FROM customers`;
    db.query(check,function(err,rows,fields){
        if(!err) res.send({customer:rows})
        else throw err;

    })

})

module.exports=router;
