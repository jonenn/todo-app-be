import type { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
   statusCode?: number;
}

const errorHandler = (
   err: CustomError,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal unexpected error';

   console.log(
      `[Error] ${new Date().toISOString()} - ${statusCode} - ${message}`
   );

   if (err.stack) {
      console.error(err.stack);
   }

   res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
   });
};

export default errorHandler;
