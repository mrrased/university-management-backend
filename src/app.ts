import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user,route';
import { SemesterRoutes } from './app/modules/academicSemester/academicSemester.Route';
const app: Application = express();
// const port = 3000

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters', SemesterRoutes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // throw new ApiError(400, 'api Error Message')
//   next('apin Error message')
// })

// Global Error Handler
app.use(globalErrorHandler);

export default app;
