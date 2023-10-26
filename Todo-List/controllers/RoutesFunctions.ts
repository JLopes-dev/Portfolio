import { Request, Response } from 'express';
import Quest from '../models/questModel';
class RoutesFunctions {

    public renderHome(req: Request, res: Response) {
        res.render('home')
    }

    public async createQuest(req: Request, res: Response) {
        const { tarefa, descricao } = req.body;
        await Quest.create({ tarefa, descricao })
        res.redirect('/')
    }
    public async showQuest(req: Request, res: Response) {
        const show = await Quest.findAll({ raw: true })
        res.render("quests", { data: show })
    }
}

const routesFunctions = new RoutesFunctions();
export default routesFunctions;