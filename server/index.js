const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
// const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// multer file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//routes

app.post("/upload", upload.single("file"), uploadReport); // make in controller
