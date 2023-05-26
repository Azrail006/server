const Router = require('express');
const router = new Router();
const ProductsController = require('../controller/products.controller');


router.post('/products', ProductsController.createProducts);
router.get('/list', ProductsController.getProducts);
router.get('/product/:id', ProductsController.getOneProduct);
router.put('/product', ProductsController.updateProduct);
router.delete('/product/:id', ProductsController.deleteProduct);     


module.exports = router