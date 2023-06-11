import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    // req-validation
    // body--> object
    // data --> object

    const { user } = req.body
    const result = await UserService.craeteUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (err) {
    // res.status(400).json({
    //   sucess: false,
    //   message: 'Failed to create user',
    // })
    next(err)
  }
}

export const UserController = {
  createUser,
}
