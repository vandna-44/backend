//server start krna 
//DB connect krna 

const app = require('./src/app')
const connect = require('./src/db/db')

connect()

app.listen(3000,()=>{
    console.log("sever is running or port 3000")
})