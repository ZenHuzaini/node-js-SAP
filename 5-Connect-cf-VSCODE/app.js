const express = require("express")
const app = express()
const port = process.env.PORT || 9990
app.get("/", (req, res)=>{
    return res.send("Hello Dannn")
})

app.get("/content/:name", (req, res)=>{
    console.log("gett ", req.params)
    return res.send(`hello ${req.params.name}`)
})

app.get("*", (req, res)=>{
    return res.status(400).send(`hello this endpoint does not exist`)
})

app.listen(port, ()=>{
console.log("connected to port ", port)
})
