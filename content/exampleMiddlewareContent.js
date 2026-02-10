const exampleMiddlewareContent = `const log = (req, res, next) => {
  console.log("Log at: ", new Date().toLocaleString());
  next();
}

export default log`

export default exampleMiddlewareContent