const company = require('../Models/company.model');


exports.addCompany = (req, res)=>{
    const data = {
        companyName : req.body.companyName,
        description : req.body.description,
        commercialRegistrationNumber : req.body.commercialRegistrationNumber,
        email : req.body.email,
        addressLine1 : req.body.addressLine1,
        addressLine2 : req.body.addressLine2,
        state : req.body.state,
        city : req.body.city,
        posteCode : req.body.posteCode,
        country : req.body.country,
        contactNumber : req.body.contactNumber,
        contactPerson : req.body.contactPerson,
        taxCardNumber : req.body.taxCardNumber,
    }

    const _company = new company(data);
    _user.save().then(
        (createdCompany)=>{
            res.status(200).json({message : "company added successfully..."})
            console.log(_company);
        }
    ).catch(
        (err)=>{
            res.status(400).json({message : "problem while adding the company..."})
            console.log(err);
        }
    )
}

