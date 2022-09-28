import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';


import users from '../models/auth.js';
// import Otp from '../models/otpmodals.js';
// import fast2sms from 'fast-two-sms';
// import otpGenerator from 'otp-generator';


export const signup = async (req, res) => {

    const { name, email, password ,phoneno } = req.body;
    try{
        const existinguser = await users.findOne({ email })
        if(existinguser)
        {
            return res.status(404).json({ message: "User already exist."})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, phoneno , password : hashedPassword})
        const token = jwt.sign({ email: newUser.email, id:newUser._id}, process.env.JWT_SECRET , {expiresIn:'1h'})
        res.status(200).json({result: newUser, token})
    } catch(error){
        res.status(500).json("Something went wrong...")
    }
}
export const login = async (req, res) => {
    
    const { email, password } = req.body;
    try{
        const existinguser = await users.findOne({ email }); 
        if(!existinguser)
        {
            return res.status(404).json({ message: "User don't exist."})
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
        if(!isPasswordCrt){
            return res.status(400).json({ message: "Invalid Credentials"})
        }
        const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(200).json({result: existinguser, token})
    }catch(error){
        res.status(500).json("Something went wrong...")
    }

}
// export const OTPLogin = async ( req, res ) => {

//     const { phoneno  } = req.body;
//     try {
//         const existinguser = await users.findOne({ phoneno });
//         if(!existinguser)
//         {
//             return res.status(404).json({ message: "User don't exist."})
//         }
//         const token = jwt.sign({ phoneno: existinguser.phoneno, id:existinguser._id}, "test" , {expiresIn:'1h'});

//         const OTP = otpGenerator.generate(6, {
//             digits: true ,alphabets: false ,upperCase: false ,specialChars: false 
//         });
        
        
//         var options = {authorization : "VbwqdsZ7Qyk5JgeM9OuAB41pLCi2XHoIxPaf3U86FcKnlhDYz0WLvCwzANIbZ8x5GHr12Jyjhu0qRgMl" , message : `Verification Code ${OTP}` ,  numbers : `+${existinguser.phoneno}`} 
//         fast2sms.sendMessage(options) //Asynchronous Function.
//         const otp = await Otp({ 
//             phoneno: existinguser.phoneno, 
//             otp: OTP 
//         });
//         await otp.save();


//     } catch (error) {
//         res.status(500).json("Something went wrong...")
//     }
// }

