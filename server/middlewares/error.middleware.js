const errorMiddleware = (err, req, res, next) => {

  const status = err.status || 500;
  const message = err.message || "backend error";
  const extraMessage = err.extraMessage || "error from backend"


  return res.status(status).json({message, extraMessage});

};

export default errorMiddleware;