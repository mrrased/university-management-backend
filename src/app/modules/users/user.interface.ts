/* eslint-disable no-unused-vars */

import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';
import { IFaculty } from '../faculty/faculty.interface';
import { IAdmin } from '../admin/admin.Interface';

export type IUser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: true | false;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

export type UserModel = {
  isUserExist(
    id: string
  ): Promise<Pick<
    IUser,
    'id' | 'password' | 'role' | 'needsPasswordChange'
  > | null>;
  isPasswordMatched(
    givenPassword: string,
    savePassword: string
  ): Promise<boolean>;
} & Model<IUser>;

// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
