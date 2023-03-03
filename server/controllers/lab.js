const { connectDb, client } = require("../config/db");

exports.getLabController = async (req, res) => {
    try {

        const name = req.params.name;

        if (name === "") {

            const query = `SELECT * FROM lab`;
            const result = await client.query(query);

            return res.status(200).json({ result: result.rows });

        }

        else {

            const query = `SELECT * FROM lab WHERE name = $1`;
            const value = [name];

            const result = client.query(query, value);

            if (result.rows.length === 0) {
                return res.status(404).json({ error: "No such lab assistant found" });
            }

            return res.status(200).json({ result: result.rows });

        }


    } catch (err) {
        res.json({ error: err.message }).status(500);

    }



}

exports.deleteLabController = async (req, res) => {

    try {
        const id = req.body;

        const query = `DELETE FROM lab WHERE id = $1`;
        const value = [id];

        const result = client.query(query, value);

        if (result.rows.length === 0) {
            return res.json({ error: "No such lab assistant found" }).status(404)
        }

        return res.status(200).json({ message: "Lab Assistant deleted successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message })

    }
}