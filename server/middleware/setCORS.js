module.exports = (req, res, next) => {
  
  res.set({
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE , OPTIONS",
    "Access-Control-Allow-Origin":
      process.env.NODE_ENV === "production"
        ? "https://doitforme.com"
        : "http://localhost:3001",
    Vary: "Origin",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  next();
};
