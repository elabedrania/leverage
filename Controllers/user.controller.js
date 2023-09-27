const user = require('../Models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req, res)=>{
    const data = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password , 10),
        phoneNumber : req.body.phoneNumber,
        address : req.body.address,
        birthDate : req.body.birthDate
    }

    const _user = new user(data);
    _user.save().then(
        (createdUser)=>{
            res.status(200).json({message : "user added successfully..."})
            console.log(_user);
        }
    ).catch(
        (err)=>{
            res.status(400).json({message : "problem while adding the user..."})
            console.log(err);
        }
    )
}

exports.signin = async (req, res) =>{
    
    const {email , password} = req.body;
    const _user = await user.findOne({email : email}) 

    if(!_user){
        return res.status(400).json({message : "Email not found !"})
    }
    bcrypt.compare( password , _user.password).then(

        (isMatch) => {
            if(isMatch == false){
                return res.status(400).json({message : "Wrong password ... "});
            }else{


                const token = jwt.sign(
                    { data : {id : user._id , role : user.role } },
                    process.env.CLE,
                    {expiresIn : '1h'}
                    )
                    return res.status(200).json(
                        {
                            message : "success ... ",
                            token : token,
                            user : user
                        }
                            
                    );                    

            }
        }
    )

}