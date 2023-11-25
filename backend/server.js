require('dotenv').config() //require env, envirenment variable.

//require the express app
const express = require('express')
const mongoose = require('mongoose')
const threadRoutes = require('./routes/threads')

//express app
const app = express()

//middleware
app.use(express.json()) //allows to view and edit object in the req

app.use((req, res, next)=> {
    //log request path and method
    console.log(req.path, req.method)
    next()

})

//routes
app.use('/api/threads',threadRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT, () =>
        {
            console.log("Connnected to DB && listening on port", process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })



process.env