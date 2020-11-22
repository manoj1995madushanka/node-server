const mongoose = require('mongoose');

const userScheme = new mongoose.UserScheme({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1500
    },
    date:{
        type:Date,
        default:Date.now
    }
});

mongoose.exports = mongoose.model('User',userSchema);