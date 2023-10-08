import mongoose from "mongoose";

class Mongo {
    public async mongoConnect(DBurl: string) {
        await mongoose.connect(DBurl)
        .then(() => console.log('mongoose...'));
    } 
}
const mongo = new Mongo()
export default mongo
//
//