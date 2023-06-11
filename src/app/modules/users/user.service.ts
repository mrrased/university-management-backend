import Config from '../../../Config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const craeteUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id

  const id = await generateUserId()

  user.id = id

  // default password
  if (!user.password) {
    user.password = Config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!craeteUser) {
    throw new ApiError(400, 'Failed to create user!')
  }

  return createdUser
}

export const UserService = {
  craeteUser,
}
