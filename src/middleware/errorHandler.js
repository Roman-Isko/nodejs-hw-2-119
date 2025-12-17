import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const status = err instanceof HttpError ? err.status : 500;

  const message =
    err instanceof HttpError ? err.message : 'Internal Server Error';

  res.status(status).json({ message });
};
