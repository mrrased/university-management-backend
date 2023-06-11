import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.Service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    // req-validation
    // body--> object
    // data --> object

    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'academic Semester is created successfully',
      data: result,
    });
  } catch (err) {
    // res.status(400).json({
    //   sucess: false,
    //   message: 'Failed to create user',
    // })
    next(err);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
