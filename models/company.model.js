const mongoose = require('mongoose')
const { User } = require('./user.model')
const companySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
        require:true,
    },
    logo:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:User,
        require:true,
    }

},{timestamps:true})