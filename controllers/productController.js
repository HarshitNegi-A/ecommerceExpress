const path=require('path')

const productService=require('../service/productService')

const getProducts=(req,res)=>{
    const message=productService.getAllProducts()
    res.sendFile(path.join(__dirname,"..","view","product.html"))
}
const getProductsById=(req,res)=>{
    const message=productService.getProductById(req.params.id)
    res.send(`<h1>${message}</h1>`)
}
const postProducts=(req,res)=>{
    const message=productService.addProduct()
    res.send(`<h1>${message}</h1>`)
}

const putProducts=(req,res)=>{
    const message=productService.updateProduct()
    res.send(`<h1>${message}</h1>`)
}

const deleteProducts=(req,res)=>{
    const message=productService.deleteProduct()
    res.send(`<h1>${message}</h1>`)
}

module.exports={getProducts,getProductsById,postProducts,putProducts,deleteProducts}