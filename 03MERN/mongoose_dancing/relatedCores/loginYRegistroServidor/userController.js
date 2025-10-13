import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req,res) => {
    try {
        let userCreated = await User.create(req.body);
        return res.status (201).json(userCreated);
    } catch (error){
        return res.status(400).json({
            message: error.message
            });
        }
}

export const login = async (req, res) => {
    let userFound = await User.findOne({email:req.body.email});
    if(!userFound){
        return res.status(200).json({found: false});
    }

    let token = jwt.sign({id: userFound._id, email: userFound.email}, "mongoosedancing", {expiresIn: "10m"});

    return res.cookie("jwt", token, {httpOnly: true}).json({found: true});

}