const express = require("express");
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    const body = req.body;
    req.body2 = body;
    next();
    //console.log("Body 2 :",req.body2);
})


app.post("/api/postBody",(req,res)=>{
    // console.log("Body 2 :",req.body2);
    if(Object.keys(req.body2).length === 0){
        res.status(404).json({
            error:"Body 2 not found"
        })
    }
    res.status(200).json({
        data:req.body2
    })
    
})

app.listen(3001,()=>{
    console.log("Listening to port 3001.....");
})