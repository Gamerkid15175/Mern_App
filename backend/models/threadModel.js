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
    code: {
        type: Number,
        required:true
        }
},{
    timestamps:true
})

module.exports = mongoose.model('thread', threadSchema)