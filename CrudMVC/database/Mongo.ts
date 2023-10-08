import mongoose from "mongoose";

class Mongo {
    public async mongoConnect() {
        await mongoose.connect('mongodb://127.0.0.1:27017/Portfolio')
        .then(() => console.log('mongoose...'));
    } 
}
const mongo = new Mongo()
export default mongo
//DBurl: string
//DBurl