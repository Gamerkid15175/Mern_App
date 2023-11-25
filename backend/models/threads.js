const mongoose = require('mongoose')

const Schema = mongoose.Schema

const threadSchema = new Schema({
    title: {
        type: String,
        required: true
        },
    line: {
        type: Number,
        required:true
        },
    date: {
        type: Number,
        required:true
        }
})