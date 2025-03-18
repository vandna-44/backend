const express = require('express')

const app = express()

app.use(express.json())

app.get('/',(req,res) => {

    console.log(req.body)

    res.send("hello world")
})

app.get('/profile', (req,res) => {
    res.send("page")
})

app.get('*',(req, res) => {
    res.send("Incorrect url")
})



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})