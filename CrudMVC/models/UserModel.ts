import { model, Schema } from "mongoose";

<<<<<<< HEAD
const User = model('users', new Schema({
=======
    const User = model('users', new Schema({
>>>>>>> 6e1544cf75a7f031a51b7ee603a387611f0ff69f
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


<<<<<<< HEAD

=======
>>>>>>> 6e1544cf75a7f031a51b7ee603a387611f0ff69f
export default User