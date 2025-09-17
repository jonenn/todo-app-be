import type { Request, Response, NextFunction } from 'express';

const LoggerMW = (req: Request, res: Response, next: NextFunction) => {
   const timestamp = new Date().toISOString();

   console.log(`[${timestamp} ${req.method} ${req.url} — IP: ${req.ip}]`);

   const start = Date.now();

   res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[${timestamp} Response: ${res.statusCode} - ${duration}ms]`);
   });

   next();
};

export default LoggerMW;
