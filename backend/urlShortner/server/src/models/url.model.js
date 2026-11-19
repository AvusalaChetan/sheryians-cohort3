import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    orginalUrl: {
        type: String,
        required: [true,'orginalUrl is required']
    },
    shortCode:{
        type: String,
        required: [true,'shortCode is required']
    },
    click:{
        type: Number,
        default: 0
    }
},{timestamps:true})

const urlModel = mongoose.model('Url', urlSchema)

export default urlModel