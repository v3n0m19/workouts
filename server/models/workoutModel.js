//this files manages the models of the database

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },

},{timestamps:true})

//this creates a model which is used to interact with the workouts collection
module.exports = mongoose.model('Workout',workoutSchema)
