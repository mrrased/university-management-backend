import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // req-validation
      // body--> object
      // data --> object

      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      })
      return next()

      // const { user } = req.body
      // const result = await UserService.craeteUser(user)
      // res.status(200).json({
      //   success: true,
      //   message: 'user created successfully',
      //   data: result,
      // })
    } catch (error) {
      // res.status(400).json({
      //   sucess: false,
      //   message: 'Failed to create user',
      // })
      next(error)
    }
  }

export default validateRequest
