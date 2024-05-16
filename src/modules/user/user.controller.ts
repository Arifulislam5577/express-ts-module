import { Request, Response } from 'express'
import User from './user.model'

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age, isAdmin } = req.body
    const user = await User.create({ name, email, age, isAdmin })
    return res.status(201).json({ success: true, data: user })
  } catch (error) {
    return res.status(500).json({ success: false, message: error })
  }
}

const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    return res.status(201).json({ success: true, data: users })
  } catch (error) {
    return res.status(500).json({ success: false, message: error })
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await User.findOne({ _id: userId }).exec()
    return res.status(201).json({ success: true, data: user })
  } catch (error) {
    return res.status(500).json({ success: false, message: error })
  }
}

export const userController = { createUser, getAllUser, getUser }
