const mongoose = require('mongoose')
const { User } = require('./user.model')
const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    requirements:[{
        type:String 
    }],
    salary:{
        type:String,
        required:true
    },
    location:{
        type:String,
        require:true
    },
    jobType:{
        type:String,
        require:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:company,
        require:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    },
    application:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'application'
        }
    ]
},{timeseries:true});

export const job = mongoose.model('job',jobSchema);