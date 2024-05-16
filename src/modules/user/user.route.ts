import express from 'express'
import { userController } from './user.controller'

const userRouter = express.Router()

userRouter.route('/:userId').get(userController.getUser)
userRouter.route('/').get(userController.getAllUser)
userRouter.route('/create-user').post(userController.createUser)

export { userRouter }
