const express = require("express");
const http = require("http");
const authRoutes = require("./routes/authRoutes.js");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://Pulkit:Pulkit321@cluster0.coxya.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error: "));
db.once("open", function () {
  console.log("Database connected successfully");
});


const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

//register the routes
app.use("/api/auth", authRoutes);

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
