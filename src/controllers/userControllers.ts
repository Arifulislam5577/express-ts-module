import { Request, Response } from 'express'

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = {
      name: 'ABC',
      age: 25
    }

    return res.json({
      status: 200,
      data: user
    })
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    })
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body

    return res.json({
      message: 'User created Successfully',
      status: 201,
      data: user
    })
  } catch (error) {
    return res.json({
      status: 500,
      message: error
    })
  }
}
