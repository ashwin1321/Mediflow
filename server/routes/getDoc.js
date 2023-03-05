const express = require("express");
const router = express.Router();

const { getDocController, deleteDocController } = require("../controllers/doc.js");
const { getLabController, deleteLabController } = require("../controllers/lab.js");
const { getPatientController } = require("../controllers/patient.js");


router.route("/doc")
    .get(getDocController)
    .delete(deleteDocController);


router.route("/lab")
    .get(getLabController)
    .delete(deleteLabController);


router.route("/patient/id")
    .get(getPatientController)

module.exports = router;