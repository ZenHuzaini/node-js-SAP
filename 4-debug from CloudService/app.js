let name = "zen"
debugger
console.log(`hellos  ${name}`)
console.log("jjjjj ")

const express = require("express")
const app = express()
const port = process.env.PORT || 9990
app.get("/", (req, res)=>{
    return res.send("Hello Dannn")
})

app.get("/who/:name", (req, res)=>{
    console.log("gett ", req.params)
    return res.send(`hello ${req.params.name}`)
})

app.listen(port, ()=>{
console.log("connected to port ", port)
})
















