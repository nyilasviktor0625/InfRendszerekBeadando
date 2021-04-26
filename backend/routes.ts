import { Router } from 'express';
import { CategoryController } from './src/controller/category.controller';
import { DVDController } from './src/controller/dvd.controller';
import { CustomerController } from './src/controller/customer.controller';

export function getRouter() {
    const router = Router();

    const customerController = new CustomerController();
    const dvdController = new DVDController();
    const categoryController = new CategoryController();

    router.get('/customers', customerController.getAll);
    router.get('/customers/:id', customerController.getOne);
    router.post('/customers', customerController.create);
    router.put('/customers', customerController.update);
    router.delete('/customers/:id', customerController.delete);

    router.get('/dvds', dvdController.getAll);
    router.get('/dvds/:id', dvdController.getOne);
    router.post('/dvds', dvdController.create);
    router.put('/dvds', dvdController.update);
    router.delete('/dvds/:id', dvdController.delete);

    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', categoryController.create);
    router.put('/categories', categoryController.update);
    router.delete('/categories/:id', categoryController.delete);

    return router;
}
