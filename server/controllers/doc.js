const { query } = require("express");
const { connectDb, client } = require("../config/db");

exports.getDocController = async (req, res) => {

    try {

        const name = req.query.name;
        console.log(name)

        if (name === "") {

            const query = `SELECT * FROM doctors`;
            const result = await client.query(query);

            return res.status(200).json({ result: result.rows });

        }

        else {

            const query = `SELECT * FROM doctors WHERE name = $1`;
            const value = [name];

            const result = await client.query(query, value);

            if (result.rows.length === 0) {
                return res.json({ error: "No such doctor found" });
            }

            return res.status(200).json({ result: result.rows });

        }


    } catch (err) {
        res.json({ error: err.message }).status(500);

    }



}

exports.deleteDocController = async (req, res) => {

    const id = req.body;

    try {

        const query = `DELETE FROM doctors WHERE id = $1`;
        const value = [id];

        const result = await client.query(query, value);

        if (result.rows.length === 0) {
            return res.json({ error: "No such doctor found" }).status(404)
        }

        return res.status(200).json({ message: "Doctor deleted successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message })

    }



}