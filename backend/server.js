require('dotenv').config()
//require env, envirenment variable.

//require the express app
const express = require('express')

//express app
const app = express()

//middleware
app.use((req, res, next)=> {
    //log request path and method
    console.log(req.path, req.method)
    next()

})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listen for request
app.listen(process.env.PORT, () =>
{
    console.log("listening on port", process.env.PORT)
})

process.env