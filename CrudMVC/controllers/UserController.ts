import { Request, Response } from 'express';
import User from '../models/UserModel';
<<<<<<< HEAD
=======

>>>>>>> 6e1544cf75a7f031a51b7ee603a387611f0ff69f
class RoutesFunctions {

    public async createUser(req: Request, res: Response) {
        const { userName, email, password } = req.body;
<<<<<<< HEAD
        User.create({ 
=======
        await User.create({
>>>>>>> 6e1544cf75a7f031a51b7ee603a387611f0ff69f
            userName, email, password
         })
        res.status(201).send({ message: 'Data created!' })
    }

<<<<<<< HEAD
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
        
=======
    public async getFunction(req: Request, res: Response) {
        const data = await User.findOne({ userName: req.params.userName, email: req })
        res.send({ message: data })
    }

    public async updateFunction(req: Request, res: Response) {
        const data = await User.findOne({ userName: req.params.userName })
        if(!data) return res.send({ message: 'Esse usuário não existe!' })
        const { userName, email, password } = req.body; 
        await User.findOneAndUpdate({ userName: req.params.userName }, { userName, email, password })
        res.send({ message: 'Dados Atualizados!' })
    }

    public async deleteFunction(req: Request, res: Response) {
        const data = await User.findOne({ userName: req.params.userName })
        if(!data) return res.send({ message: 'Esse usuário não existe!' })
        await User.deleteOne({ userName: req.params.userName })
        res.send({ message: 'Dados Deletados!' })
>>>>>>> 6e1544cf75a7f031a51b7ee603a387611f0ff69f
    }
    public async auth(req: Request, res: Response) {
        const { userName, password } = req.body;
        const data = await User.findOne({ userName: userName, password: password })
        if(!data) return res.send({ message: "Usuário/Senha não existem!" })
        res.send({ message: data })
    }
}

const routesFunctions = new RoutesFunctions()
export default routesFunctions