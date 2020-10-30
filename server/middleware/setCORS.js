module.exports = (req, res, next) => {
  
  res.set({
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE , OPTIONS",
    "Access-Control-Allow-Origin": "*",
    Vary: "Origin",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  next();
};
