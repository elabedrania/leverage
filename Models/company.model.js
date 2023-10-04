const mongoose = require('mongoose');
const userModel = require('./user.model');

const companySchema = mongoose.Schema({
    companyName : String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    description : String,
    commercialRegistrationNumber : String,
    email : String,
    addressLine1 : String,
    addressLine2 : String,
    state : String,
    city : String,
    posteCode : String,
    country : String,
    contactNumber : String,
    contactPerson : String,
    taxCardNumber : String,
    
})

module.exports = mongoose.model('companies', companySchema);