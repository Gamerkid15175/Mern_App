const threadModel = require('../models/threadModel')
const mongoose = require('mongoose')

//get all threads
const getThreads = async (req, res) =>
{
    const threads = await threadModel.find({}).sort({createdAt: -1})

    res.status(200).json(threads)
}

//get a single thread
const getThread = async (req,res) =>
{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such thread'})
    }
    const thread = await threadModel.findById(id)

    if(!thread) 
    {
        return res.status(404).json({error: 'No such thread'})
    }

    res.status(200).json(thread)
}

//create new thread
const createThread = async (req, res) =>
{
    const {title, line, code} = req.body

    //add to database
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
}

//delete thread
const deleteThread = async (req, res) =>
{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such thread'})
    }

    const thread = await threadModel.findOneAndDelete({_id: id})
    if(!thread)
    {
        return res.status(404).json({error: 'No such thread'})
    }

    res.status(200).json(thread)
}


//update thread
const updateThread = async (req,res)=>
{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No such thread'})
    }

    const thread = await threadModel.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!thread)
    {
        return res.status(404).json({error: 'No such thread'});
    }

    res.status(200).json(thread)
}

module.exports = {
    getThreads,
    getThread,
    createThread,
    deleteThread,
    updateThread
}