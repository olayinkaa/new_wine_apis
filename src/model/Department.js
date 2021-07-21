const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const DepartmentSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    leaderName:{
        type:String,
        required:true,
    }
    // leader:{
    //     type:Schema.Types.ObjectId,
    //     ref: 'user'
    // }
},{timestamps: true})

module.exports = model('department',DepartmentSchema)