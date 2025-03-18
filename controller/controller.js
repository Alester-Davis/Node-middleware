const controller = (req,res)=>{
    // console.log("Body 2 :",req.body2);
    if(Object.keys(req.body2).length === 0){
        res.status(404).json({
            error:"Body 2 not found"
        })
    }
    res.status(200).json({
        data:req.body2
    })
    
}

module.exports={
    controller
}