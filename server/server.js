const express=require("express")
const server=express()
const port=5000
server.get('/',(req,res)=>{
 res.send("server is running")
})
server.listen(port,()=>{console.log("Server is running")})