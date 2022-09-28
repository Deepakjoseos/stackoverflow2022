import { mongoose } from 'mongoose';

const otpSchema = new mongoose.Schema({
    phoneno: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now, index: { expires: 600 } }
}, 
{ 
    timestamps: true 
});

export default mongoose.model("Otp",otpSchema);