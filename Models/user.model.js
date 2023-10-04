const mongoose = require('mongoose');
const Company = require('./company.model');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    phoneNumber : String,
    address : String,
    role : {
        type : String,
        enum : ['admin', 'user'],
        default : 'user'
    },
    birthDate : String,
    
})

module.exports = mongoose.model('users', userSchema);