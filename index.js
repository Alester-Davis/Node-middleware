const express = require("express");
const { reqChanger } = require("./middleware/middleware");
const { router } = require("./routes/routes");
const app = express();

app.use(express.json());

app.use(reqChanger);

app.use("/api",router)


app.listen(3001,()=>{
    console.log("Listening to port 3001.....");
})