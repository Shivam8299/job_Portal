const mongoose = require('mongoose')
const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types,
        ref:'job',
        require:true
    },
    applicant:{
        type:mongoose.Schema.Types,
        ref:'user',
        require:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }

},{timestamps:true})

export const application = mongoose.model('application',applicationSchema);