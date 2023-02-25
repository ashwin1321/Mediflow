// login and logout routes
// register doctor lab and patients

const express = require("express");
const router = express.Router();
const { loginController, registerConroller, logoutController } = require("../controllers/auth");


router.route("/login")
    .post(loginController);

router.route("/register")
    .post(registerConroller);

router.route("/logout")
    .post(logoutController);

module.exports = router;
