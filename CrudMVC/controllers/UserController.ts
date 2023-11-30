import { Request, Response } from 'express';
import User from '../models/UserModel';
class RoutesFunctions {

    public async createUser(req: Request, res: Response) {
        const { userName, email, password } = req.body;
        User.create({ 
            userName, email, password
         })
        res.status(201).send({ message: 'Data created!' })
    }

    public async showOneUser(req: Request, res: Response) {
        const data = await User.findOne({ userName: req.params.userName })
        res.status(200).send({ message: data })
    }
    public async showAllUsers(req: Request, res: Response) {
        const data = await User.find()
        res.status(200).send({ message: data })
    }

    public async updateUser(req: Request, res: Response) {
        const { username, password, newPassword } = req.body; 
        const data = await User.findOneAndUpdate({ username, password }, { password: newPassword })
        if(!data) return res.status(404).send({ message: 'The user does not exist!' })
        res.status(200).send({ message: 'Data updated!' })
    }

    public async deleteOneUser(req: Request, res: Response) {
        const { email, password } = req.body;
        const data = await User.findOneAndDelete({ email, password })
        if(!data) return res.status(404).send({ message: 'The user does not exist!' })
        res.status(200).send({ message: 'Data deleted' })
        
    }
}

const routesFunctions = new RoutesFunctions()
export default routesFunctions