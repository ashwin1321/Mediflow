// login and logout routes
// register doctor lab and patients

const express = require("express");
const router = express.Router();
const { loginController, registerController, logoutController, otpController } = require("../controllers/auth");


router.route("/login")
    .post(loginController);

router.route("/register")
    .post(registerController);

router.route("/logout")
    .post(logoutController);


router.route("/otp")
    .post(otpController);

module.exports = router;
