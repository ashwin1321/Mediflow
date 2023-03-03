const express = require("express");
const router = express.Router();

const { getDocController, addDocController, deleteDocController } = require("../controllers/doc.js");
const { getLabController, addLabController, deleteLabController } = require("../controllers/lab.js");


router.route("/doc")
    .get(getDocController)
    .post(addDocController)
    .delete(deleteDocController);


router.route("/lab")
    .get(getLabController)
    .post(addLabController)
    .delete(deleteLabController);

module.exports = router;