const express=require('express')
const router=express.Router()
const usersController=require('../controllers/userController')

router.get('/',usersController.getUsers)

router.post('/',usersController.addUsers)

router.get('/:id',usersController.addUsersById)


module.exports=router