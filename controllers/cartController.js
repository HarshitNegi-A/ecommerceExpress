const getCartById=(req,res)=>{
    res.send(`<h1>Fetching cart for user with ID: ${req.params.id}.</h1>`)
}

const addToCart=(req,res)=>{
    res.send(`<h1>Adding product to cart for user with ID: ${req.params.id}</h1>`)
}

module.exports={getCartById,addToCart}