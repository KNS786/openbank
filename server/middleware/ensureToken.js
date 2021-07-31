module.exports=(req,res,next)=>{
    var bearearHeader=req.headers["authorization"];
    if(typeof bearearHeader!='undefined'){
        const bearer=bearearHeader.split(" ");
        const bearearToken=bearer[1];
        req.token=bearearToken;
        next();
    
    }
   else{
       res.sendStatus(403);
       
   }
}