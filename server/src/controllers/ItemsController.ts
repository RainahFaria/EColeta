import knex from '../database/conection';
import {Request, Response} from 'express';

class ItemsController {

    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(i => {
            return {
                id: i.id,
                title: i.title,
                imageUrl: `http://localhost:3333/uploads/${i.image}`
            }
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;