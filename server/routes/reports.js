// read, create and delete reports

const express = require("express");
const router = express.Router();

const { getReports } = require("../controllers/reports");

router.route("/view-report/:id")
    .get(getReports);

module.exports = router;