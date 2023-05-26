const db = require("../db")

class ProductsController {
    async createProducts(req, res) {
        const { name, price, stock } = req.body
        const newProducts = await db.query(`INSERT INTO products (name, price, stock) values ($1, $2, $3) RETURNING *;`, [name, price, stock])
        res.json(newProducts.rows[0])
    }

    async getProducts(req, res) {
        const products = await db.query('SELECT * FROM products')
        res.json(products.rows)
    }

    async getOneProduct(req, res) {
        const id = req.params.id
        const product = await db.query('SELECT * FROM products where id = $1', [id])
        res.json(product.rows[0])
    }
    async updateProduct(req, res) {
        const { id, name, price, stock } = req.body
        const product = await db.query('UPDATE products set name = $1, price = $2, stock = $3 where id = $4 RETURNING *', [name, price, id, stock])
        res.json(product.rows[0])


    }
    async deleteProduct(req, res) {
     const id = req.params.id
     const product = await db.query('DELETE FROM products where id = $1', [id])
     res.json(product.rows[0])
    }
}

module.exports = new ProductsController()