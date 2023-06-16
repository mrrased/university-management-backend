import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { studentFilterableFields } from './student.Constants';
import { IStudent } from './student.interface';
import { StudentService } from './student.Service';
// import { IPaginationOPtions } from '../../../interfaces/pagination';

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, studentFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await StudentService.getAllStudent(
      filters,
      paginationOptions
    );

    sendResponse<IStudent[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrived Succesfully !',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

const getSingleStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await StudentService.getSingleStudent(id);

    sendResponse<IStudent>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrived Succesfully !',
      data: result,
    });
    next();
  }
);

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await StudentService.updateStudent(id, updatedData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Updated Succesfully !',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.deleteStudent(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted Succesfully !',
    data: result,
  });
});

export const StudentsController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
