//sever create krna
//sever config 
const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.use((req, res, next) =>{
    console.log("this is middleware")
})

app.get('/', (req,res) => {
    res.render('index')
})



module.exports = app;