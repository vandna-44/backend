const { error } = require('console')
const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json())


app.get('/',(req, res) => {
    res.send("Hello world")
})

/*/create/*/

app.post('/create', (req,res) => {

    const {fileName, fileData } = req.body

    const filePath ="./uploads/" + fileName

    fs.writeFile(filePath, fileData, (err) =>{
        if(err) {
            console.log(err)
            res.send('error ')
        }else{
            res.send('file create successful')
        }
        
    })

})
 /*/create/filename => req.params*/
 app.get('/read/:fileName', (req, res) =>{
    const fileName = req.params.fileName

    const filePath ="./uploads/" + fileName

    fs.readFile(filePath, {
        encoding: "utf-8"
    }, (err, data) => {
        if(err){
            res.send("error ")
        }
        else{
            res.send(data)
        }
    })

 })

 /* /update/fileName => fileData update [] */

 app.patch('/update/:fileName', (req, res) => {
    const fileData = req.body.fileData

    const fileName = req.params.fileName
    const filePath = "./uploads/" + fileName

    fs.writeFile(filePath, fileData, (err) => {
        if(err){
            res.send('error')
        }else{
            res.send('file update successful')
        }
    })

 })

 /*/delete/*/

 app.delete('/delete/:fileName', (req,res) =>{

    const fileName = req.params.fileName
    const filePath = "./uploads/" + fileName

    fs.unlink(filePath, (err) => {
        if(err){
            res.send('error')
        }else{
            res.send('file delete successfully')
        }
    })

 })
 /*/get-all => all in the uploads folder*/
 
 app.get('/get-all', (req, res) => {
    fs.readdir("./uploads", (err, files) => {
        if(err){
            res.send('error')
        } else{
            res.send(files)

        }
    })
 })


app.listen(3000,()=> {
    console.log("Server is running on port 3000")
})
    