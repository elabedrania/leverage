const mongoose = require('mongoose');
const objectId = require('mongodb').ObjectId;
const companySchema = mongoose.Schema({
    companyName : String,
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
    idUser : objectId
})

module.exports = mongoose.model('companies', companySchema);