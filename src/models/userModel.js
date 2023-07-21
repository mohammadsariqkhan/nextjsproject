import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        unique: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    isVerified: {
        type: 'boolean',
        default: false,
    },
    isAdmin: {
        type: 'boolean',
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyTokenExpiry: Date,
})

const User = mongoose.model.users || mongoose.model("User", userSchema)
export default User