
import mongoose from "mongoose";



const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
        trim: true, //el trim quita los espacios en blamco antes y despues
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    }
},{
    timestamps: true
})

export default mongoose.model('user', userSchema);