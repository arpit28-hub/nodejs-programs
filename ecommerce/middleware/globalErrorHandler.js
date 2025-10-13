// middlewares/globalErrorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err); // log for dev/debugging
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};
