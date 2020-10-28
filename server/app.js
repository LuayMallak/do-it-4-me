// External Dependencies
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Internal Dependencies
const indexRouter = require("./routes/index");
const servicesRouter = require("./routes/service");
const usersRouter = require("./routes/users");
const dealsRouter = require("./routes/deals");

const setCORS = require("./middleware/setCORS");
const { throw400, handleErrors } = require("./middleware/errors");
const env = require("./config/environment");


const app = express();


mongoose
  
  .connect(env.db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((err) => console.error(err));
mongoose.connection.on("open", () => console.log("MongoDB running"));
mongoose.connection.on("error", (err) => console.error(err));

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(setCORS);

// Routes
app.use("/", indexRouter);
app.use("/api/services", servicesRouter);
app.use("/api/users", usersRouter);
app.use("/api/deals", dealsRouter);

// Throw a 400 if no route is matched
app.use(throw400);

// Error Handling
app.use(handleErrors);

module.exports = app;
