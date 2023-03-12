const { connectDb, client } = require("../config/db");

exports.getPatientController = async (req, res) => {
    try {
        console.log(`object`)
        const pid = req.query.pid;
        console.log(pid)

        const query = `SELECT * FROM patients WHERE pid = $1`;
        const value = [pid];

        const result = await client.query(query, value);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "No such patient found" });
        }

        return res.status(200).json({ result: result.rows });

    } catch (err) {
        return res.status(500).json({ error: err.message });

    }
}