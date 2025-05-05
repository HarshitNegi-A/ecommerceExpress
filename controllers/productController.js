const getProducts=(req,res)=>{
    res.send("<h1>Fetching all products.</h1>")
}
const getProductsById=(req,res)=>{
        res.send(`<h1>Fetching product with ID: ${req.params.id}</h1>`)
}
const postProducts=(req,res)=>{
    res.send('<h1>Adding a new product</h1>')
}

const putProducts=(req,res)=>{
    res.send("Put request called")
}

const deleteProducts=(req,res)=>{
    res.send("Delete request called")
}

module.exports={getProducts,getProductsById,postProducts,putProducts,deleteProducts}