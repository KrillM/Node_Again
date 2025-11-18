const express = require('express')
const app = express()
const port = 8000

app.set("view engine", "ejs")
app.set("views", "./views") // 경로
app.use("/public", express.static(__dirname + "/public")) // (파일 이름, 경로)

app.get('/', function(req, res){
    res.send('hello express')
})

app.get("/test", (req, res)=>{
    res.render("test") // 주소
})

app.listen(port, function(){
    console.log(`Listening on port ${port}! http://localhost:${port}`)
})