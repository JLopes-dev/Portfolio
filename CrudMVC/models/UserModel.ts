import { model, Schema } from "mongoose";

const User = model('users', new Schema({
        userName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    })) 



export default User