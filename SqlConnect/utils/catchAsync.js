function catchAsync(fn) {
  return function(req, res, next) {
    fn(req, res, next)           // run the async controller
      .then(() => {})            // do nothing on success
      .catch(err => next(err));  // if error, pass to global 
  };
}

module.exports = catchAsync;
