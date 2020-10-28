

const sharedConfig = {
  
  env: process.env.NODE_ENV || "development",
  jwt_secret: "JAYzLlDAG3MMe3npgUSk9Yj0g91p5b9UAOc6kUOEN4a13aBGW21QeSMladRav3T",
  imageBaseURL: "http://localhost:3000/uploads/",
};

const devConfig = {
  db: "mongodb://127.0.0.1:27017/do-it-for-me",
  absolutePath: "http://localhost:3000/",
};

const prodConfig = {
  db:
  "mongodb+srv://LuayMallak:Dhl,ky,htjpgdpshfd@do-it-for-me.2iibv.mongodb.net/do-it-for-me?retryWrites=true&w=majority",
};



module.exports = Object.assign(
  {},
  sharedConfig,
  sharedConfig.env === "production" ? prodConfig : devConfig
);
