import { Request, Response } from 'express';
import Product from '../models/productModel';

class RoutesController {

    public async productCreate(req: Request, res: Response) {
        const { name, price, quantity } = req.body;
        await Product.create({ name, price, quantity });
        res.status(201).send({ messsage: 'Dados criados com sucesso!' });
    }
    public async showOneProduct(req: Request, res: Response) {
        const data = await Product.findOne({ raw: true, where: { id: req.params.id } });
        res.status(200).send({ message: data });
    }
    public async showProducts(req: Request, res: Response) {
        const data = await Product.findAll({ raw: true });
        res.status(200).send({ message: data });
    }
    public async updateProduct(req: Request, res: Response) {
        const data = {
            name: req.body.name,
            price: req.body.price,
            quamtity: req.body.quantity
        }
        await Product.update(data, { where: { id: req.params.id } })
        res.status(200).send({ message: data })
    }
    public async deleteProduct(req: Request, res: Response) {
        await Product.destroy({ where: { id: req.params.id } })
        res.status(200).send({ message: 'Produto deletado!' })
    }
}


const routesController = new RoutesController();
export default routesController;