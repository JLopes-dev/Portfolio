import { Request, Response } from 'express';
import models from '../models/UserModel';

class RoutesFunctions {

    public async postFunction(req: Request, res: Response) {
        const { userName, email, password } = req.body;
        await models.User.create({
            userName, email, password
        })
        res.send({ message: 'Dados Criados!' })
    }

    public async getFunction(req: Request, res: Response) {
        const data = await models.User.findOne({ userName: req.params.userName, email: req })
        res.send({ message: data })
    }

    public async updateFunction(req: Request, res: Response) {
        const data = await models.User.findOne({ userName: req.params.userName })
        if(!data) return res.send({ message: 'Esse usuário não existe!' })
        const { email, password } = req.body; 
        await models.User.findOneAndUpdate({ userName: req.params.userName }, { email, password })
        res.send({ message: 'Dados Atualizados!' })
    }

    public async deleteFunction(req: Request, res: Response) {
        const data = await models.User.findOne({ userName: req.params.userName })
        if(!data) return res.send({ message: 'Esse usuário não existe!' })
        await models.User.deleteOne({ userName: req.params.userName })
        res.send({ message: 'Dados Deletados!' })
    }
}

const routesFunctions = new RoutesFunctions()
export default routesFunctions