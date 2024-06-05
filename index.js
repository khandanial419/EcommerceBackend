const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/AuthRoutes");
app.listen(6000, () => {
  console.log("Server started on port 6000");
});
mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection  Successfull");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(
  cors({
    origin: ["http://localhost:5173"],
    method: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoutes);
