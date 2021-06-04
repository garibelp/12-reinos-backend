import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  const date: string = new Date().toLocaleDateString('pt-br', {
    second: '2-digit',
    minute: '2-digit',
    hour: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  console.log(`[${date}][${req.method}] - ${req.url}`);
  next();
}
