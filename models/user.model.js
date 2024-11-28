const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone_no:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['student','recuiter'],
        require:true
    },
    bio:{type:String},
    skills:[{type:String}],
    resume:{type:String}, // url to resume file
    companyOriginalName:{
        type:String,
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },
    profilePhoto:{
        type:String,
        default:''
    }

},{timeseries:true})

export const User = mongoose.model(User, userSchema)