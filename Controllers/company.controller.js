const company = require('../Models/company.model');

exports.addCompany = (req, res) => {
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

    const _company = new company(data)
    _company.save().then(
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

exports.getAll = (req, res) => {

    company.aggregate(
        [
            {
                $lookup:{
                    from:'companies',
                    localField:'id',
                    foreignField:'_id',
                    as:'com'
                }
            }
        ]
    )
    .then(
        (result)=>{
            res.send(result);
            console.log(result);
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )

}

exports.getById = (req, res) => {
    let myId = req.params.id;

    company.findById({_id : myId})

        .then(
            (result)=>{
                res.send(result);
                console.log(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
                console.log(err);
            }
        )
}

exports.delete = (req, res) =>{
    let myId = req.params.id;

    company.findByIdAndDelete({ _id: myId})
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
}

exports.update = (req, res) => {
    myId = req.params.id;

    let newData = req.body;

    company.findByIdAndUpdate({_id: myId}, newData)
    .then(
        (result)=>{
            res.send(result);
            console.log(result);
        }
    )
    .catch(
        (err)=>{
            res.send(err);
            console.log(err);
        }
    )
}