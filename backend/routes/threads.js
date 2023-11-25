const express = require('express')
const {
    createThread,
    getThread,
    getThreads,
    deleteThread,
    updateThread
} = require('../controllers/threadController')

const router = express.Router()

//GET all threads
router.get('/', getThreads)

//GET single thread
router.get('/:id', getThread)

//POST a new thread
router.post('/', createThread)

//DELETE a thread
router.delete('/:id', deleteThread)

//UPDATE a thread
router.patch('/:id', updateThread)

module.exports = router