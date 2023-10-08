import { model, Schema } from "mongoose";

class Models {

    public User = model('users', new Schema({
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
}

const models = new Models()
export default models