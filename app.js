const express = require("express")
app = express()
app.get('/',(req,res)=>{
    res.send("<h1>Hello from docker and jenkins</h1>")
})
app.listen(3000,()=>{
    console.log("listening on port 3000")
})