const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
// const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");

const userAuth = require("./routes/auth");
const PatientReport = require("./routes/reports");
const Appointments = require("./routes/appointments");
const { postReport } = require("./controllers/reports");
const addDoc = require("./routes/addDoc");

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


app.use("/auth", userAuth);
// app.use(validateToken());
app.use("/add", addDoc)
app.post("/upload", upload.single("file"), postReport); // make in controller
app.use("/reports", PatientReport);
app.use("/appointments", Appointments);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
