const express = require('express')
const threadModel = require('../models/threadModel')

const router = express.Router()

//GET all threads
router.get('/', (req, res)=>
{
    res.json({mssg: 'GET all threads'})
})

//GET single thread
router.get('/:id', (req, res)=>
{
    res.json({mssg: 'GET single thread'})
})

//POST a new thread
router.post('/', async (req, res) => 
{
    const {title, line, code} = req.body
    try 
        {
            const thread = await threadModel.create({title, line, code})
            res.status(200).json(thread)
        }
    catch(error)
        {
            res.status(400).json({error: error.message})
        }
    res.json({mssg: 'POST new thread'})
})

//DELETE a thread
router.delete('/:id', (req, res)=>
{
    res.json({mssg: 'DELETE a thread'})
})

//UPDATE a thread
router.patch('/:id', (req, res)=>
{
    res.json({mssg: 'UPDATE a thread'})
})

module.exports = router