// login and logout routes
// register doctor lab and patients

const express = require("express");
const router = express.Router();
const { loginController, registerController, logoutController } = require("../controllers/auth");


router.route("/login")
    .post(loginController);

router.route("/register")
    .post(registerController);

router.route("/logout")
    .post(logoutController);

module.exports = router;
