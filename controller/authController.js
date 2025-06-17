const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req,res) =>{
    const {username,password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password,10);
        const user = await User.create({username,password:hashPassword});
        res.status(200).json({'msg':'User Created',user});
    } catch (error) {
        res.status(500).json({'error':error});
    }
}

const login = async (req,res) =>{
    const {username,password} = req.body;
    try {
        const user = await User.findOne({username});
        if(!user || !await bcrypt.compare(password,user.password)){
            res.status(400).json({'msg':'Invalid Credentials'});
        }else{
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
                expiresIn:'1h'
            });
            res.status(200).json({'msg':'Login Success',token});
        }
    } catch (error) {
        res.status(500).json({'error':error});
    }
}

module.exports = {signup,login};