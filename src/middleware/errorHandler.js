// src/middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  if (res.headersSent) {
    return next(err);
  }

  res.status(status).json({
    message: err.message,
  });
};

//////////////////////////////////////////

// export const errorHandler = (err, req, res, next) => {
//   const status = err.status || 500;

//   res.status(status).json({
//     message: err.message,
//   });
// };
