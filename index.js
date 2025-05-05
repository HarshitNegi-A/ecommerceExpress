const express=require('express')
const app=express()
const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')
const carRoutes=require('./routes/cartRoutes')

app.use(express.static('public'))
app.use(express.json())

app.use('/users',userRoutes)
app.use('/products',productRoutes)
app.use('/cart',carRoutes)



app.listen(3000,()=>console.log("Server is running now"))