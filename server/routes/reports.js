// read, create and delete reports

const express = require("express");
const router = express.Router();

const { getReports, addReport, deleteReport } = require("../controllers/reports");

router.route("/view-report/:id")
    .get(getReports);

router.route("/add-report/:id")
    .post(addReport);


router.route("/delete-report/:id")
    .delete(deleteReport);

module.exports = router;