import express from "express"
import asyncHamdler from "express-async-handler"
const router = express.Router()
import Product from "../models/productModel.js "

// @desc   Fetch all product
// @route  GET /api/products
// @access PUBLIC
router.get('/', asyncHamdler(async (req, res) => {
    const product = await Product.find({})
    res.json(product)
}))

// @desc   Fetch single product
// @route  GET /api/products
// @access PUBLIC
router.get('/:id', asyncHamdler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router