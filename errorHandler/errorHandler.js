const errorHandler = (err, res, next) => {
  let code = 0;
  let name = err.name;
  let message = "";

  switch (name) {
    case "NOT_FOUND":
      code = 404;
      message = "Data Not Found";
      break;
    case "UNAUTHORIZED":
      code = 401;
      message = "Probihited";
      break;
  }
  res.status(code).json({ message: message });
};

module.exports = errorHandler;
