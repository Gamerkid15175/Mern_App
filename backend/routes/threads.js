const express = require('express')

const router = express.Router()

//GET all threads
router.get('/', (req, res)=>{
    res.json({mssg: 'GET all threads'})
})

//GET single thread
router.get('/:id', (req, res)=>{
    res.json({mssg: 'GET single thread'})
})

//POST a new thread
router.post('/', (req, res)=>{
    res.json({mssg: 'POST new thread'})
})

//DELETE a thread
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'DELETE a thread'})
})

//UPDATE a thread
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'UPDATE a thread'})
})
module.exports = router