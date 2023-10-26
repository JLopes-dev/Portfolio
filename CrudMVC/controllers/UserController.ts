import { Request, Response } from 'express';
import User from '../models/UserModel';

class RoutesFunctions {

    public async postFunction(req: Request, res: Response) {
        const { userName, email, password } = req.body;
        await User.create({
            userName, email, password
        })
        res.send({ message: 'Dados Criados!' })
    }

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