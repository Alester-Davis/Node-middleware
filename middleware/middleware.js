const reqChanger = (req,res,next)=>{
    const body = req.body;
    req.body2 = body;
    next();
}

module.exports = {
    reqChanger
}