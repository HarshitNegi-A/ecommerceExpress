const express=require('express')
const router=express.Router()

router.get('/:id',(req,res)=>{
    res.send(`<h1>Fetching cart for user with ID: ${req.params.id}.</h1>`)
})

router.post('/:id',(req,res)=>{
    res.send(`<h1>Adding product to cart for user with ID: ${req.params.id}</h1>`)
})


module.exports=router