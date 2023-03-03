const { connectDb, client } = require("../config/db");

exports.getLabController = async (req, res) => {
    try {

        const name = req.query.name;
        if (name === "") {

            const query = `SELECT * FROM lab`;
            const result = await client.query(query);

            return res.status(200).json({ result: result.rows });

        }

        else {

            const query = `SELECT * FROM lab WHERE name = $1`;
            const value = [name];

            const result = await client.query(query, value);
            console.log(result.rows)

            if (result.rows === undefined || result.rows === null) {
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
        const id = req.body.id;
        console.log(id)

        const query = `DELETE FROM lab WHERE lid = $1`;
        const value = [id];

        const result = await client.query(query, value);

        if (result.rows.length === 0) {
            return res.json({ error: "No such lab assistant found" }).status(404)
        }

        return res.status(200).json({ message: "Lab Assistant deleted successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message })

    }
}