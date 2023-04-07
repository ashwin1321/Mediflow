const { connectDb, client } = require("../config/db");
const nodemailer = require("nodemailer");
require("dotenv").config();


exports.getAppointments = async (req, res) => {
    try {
        const role = req.query.role;
        const id = req.query.id;
        console.log(id, role)

        if (role === "patient") {

            const query = `SELECT * FROM appointments WHERE pid = $1`;
            const value = [id];


            const result = await client.query(query, value);

            console.log(result.rows)

            if (result.rows.length === 0) {
                return res.json({ error: "No appointments found" })
            }

            res.status(200).json({
                result: result.rows
            })
        }

        if (role === "doctor") {

            const query = `select * from appointments where did = $1`;
            const values = [id];
            console.log(id)

            const result = await client.query(query, values);

            if (result.rows.length === 0) {
                return res.json({ error: "No appointments found" })
            }

            res.status(200).json({
                result: result.rows
            })
        }


    } catch (err) {

        res.status(500).json({
            error: err.message
        })
    }
}


exports.addAppointment = async (req, res) => {

    try {

        const { pid, did, date, time, remarks, phonenumber, email } = req.body;


        const query = `insert into appointments(pid, did, date, time, remarks, phonenumber) values($1, $2, $3, $4, $5, $6)`;
        const values = [pid, did, date, time, remarks, phonenumber];

        const result = await client.query(query, values)

        if (result) {
            let mailTransporter = nodemailer.createTransport({
                service: 'Outlook365',
                auth: {
                    user: process.env.SENDER_EMAIL,
                    pass: process.env.SENDER_PASSWORD
                }
            });

            let mailDetails = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: 'Appointment booked',
                text: `Your appointment has been booked on ${date} at ${time}`
            };


            mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    res.json({ error: "Error  sending email" });
                } else {
                    res.status(200).json({ booked: "Appointment booked" });
                }
            });
        }

    } catch (error) {
        res.status(500).json({
            error: err.message
        })

    }

}

exports.updateAppointment = async (req, res) => {

    try {

        const { pid, did, date, time, remarks, phonenumber } = req.body;
        const id = req.params.id;

        const query = `update appointments set pid = $1, did = $2, date = $3, time = $4, remarks = $5, phonenumber = $6 where aid = $7`;
        const values = [pid, did, date, time, remarks, phonenumber, id];

        const result = await client.query(query, values);

        if (result) {

            let mailTransporter = nodemailer.createTransport({
                service: 'Outlook365',
                auth: {
                    user: process.env.SENDER_EMAIL,
                    pass: process.env.SENDER_PASSWORD
                }
            });

            let mailDetails = {
                from: process.env.SENDER_EMAIL,
                to: result.rows[0].email,
                subject: 'Appointment Updated',
                text: `Your appointment has been updated on ${date} at ${time}`
            };

            mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    res.json({ error: "Error  sending email" });
                } else {
                    res.status(200).json({ booked: "Appointment Updated" });
                }
            });

        }
    } catch (error) {
        res.status(500).json({ error: err.message })

    }

}

exports.deleteAppointment = async (req, res) => {

    try {

        const id = req.query;

        const query = `delete from appointments where aid = $1`;
        const values = [id];

        const result = await client.query(query, values);

        if (result) {
            res.status(200).json({ deleted: "Appointment deleted" })
        }

    } catch (error) {
        res.status(500).json({ error: err.message })

    }

}

