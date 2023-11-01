import { Request, Response } from "express";
import Question from "../models/questionModel";
class RoutesFunctions {

    public renderHome(req: Request, res: Response) {
        res.status(200).render('home')
    }
    public async createQuestion(req: Request, res: Response) {
        const { titulo, descricao } = req.body;
        await Question.create({ titulo, descricao})
        res.status(201).send({ message: 'Dados criados com sucesso!' })
    }
}
const routesFunctions = new RoutesFunctions()
export default routesFunctions;