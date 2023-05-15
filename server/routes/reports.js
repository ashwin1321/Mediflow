// read, create and delete reports

const express = require("express");
const router = express.Router();

const { getReports } = require("../controllers/reports");

router.route("/view-report")
    .get(getReports);

module.exports = router;