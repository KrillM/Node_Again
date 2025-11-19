const express = require(`express`)
const app = express()
const port = 8000

app.set("view engine", "ejs")
app.set("views", "./views") // 경로

app.get("/get", function(req, res){
    console.log(req.query)
    res.send(`get 요청 성공`)
})
app.post("/post", function(req, res){
    console.log(req.body)
    res.send(`post 요청 성공`)
})

app.listen(port, function(){})