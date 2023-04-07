// routes to get post and delete appointments and update

const express = require("express");
const router = express.Router();
const { getAppointments, addAppointment, updateAppointment, deleteAppointment } = require("../controllers/appointments");


router.route('/get-appointment')
    .get(getAppointments)

router.route('/add-appointment')
    .post(addAppointment)

router.route('action/:id')
    .patch(updateAppointment)
    .delete(deleteAppointment)

module.exports = router;