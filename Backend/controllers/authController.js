const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashPassword = async(x) => {
    return await bcrypt.hash(x, 12);
}

const generateToken = (x)=>{
    return jwt.sign({userId: x}, 'my-secret-123', { 
        expiresIn: '90d',
    });
}

const signup = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(401).json({
                status: 'fail',
                message: "Invalid email or password",
            })
        }
    
        const newPassword = await hashPassword(password);
        const user = await userModel.create({email, password:newPassword});
        
        res.status(201).json({
            status: 'success',
            data:{
                user: user,
                token: generateToken(user.id),
            }
        })
    }
    catch(err){
        res.status(500).json({
            status: 'fail',
            message: err?.message,
        })
    }
}

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(401).json({
                status: 'fail',
                message: "Invalid email or password",
            })
        }
    
        const user = await userModel.findOne({email});
        if(user){
            const hashedPassword = user.password;
            const result = await bcrypt.compare(password, hashedPassword);
            if(result){
                res.status(201).json({
                    status: 'success',
                    data:{
                        user: user,
                        token: generateToken(user.id),
                    }
                });
            }
            else{
                res.status(500).json({
                    status: 'fail',
                    message: "Email or password is incorrect",
                })
            }
        }
        else{
            res.status(500).json({
                status: 'fail',
                message: "Email or password is incorrect",
            })
        }
        
    }
    catch(err){
        res.status(500).json({
            status: 'fail',
            message: err?.message,
        })
    }
}

module.exports = {
    signup,
    login
}