// controller to create read and delete routes
const { connectDb, client } = require("../config/db");
const fs = require("fs");


exports.getReports = async (req, res) => {
    try {
        const id = req.query.search;

        const query = "SELECT * FROM reports WHERE pid = $1 order by id";
        const values = [id];

        await client.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Internal server error" });
            }
            else if (result.rowCount === 0) {
                res.status(404).json({ message: "No reports found" });
            }
            else {
                res.status(200).json(result.rows);
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });

    }
}

exports.downloadReport = async (req, res) => {
    const fileId = req.query.id;
    const query = "SELECT * FROM patient_data WHERE pid = $1";
    const values = [fileId];

    await client.query(query, values, (err, result) => {

        // console.log(result.rows)
        if (err) {
            console.error(err);
            res.status(500).send("Error downloading file");
        } else if (result.rowCount === 0) {
            res.status(404).send("File not found");
        } else {
            const { file_name, mime_type, data } = result.rows[0];

            // write the file to the downloads folder using writefilesync
            const filePath = path.join("uploads/", file_name);
            fs.writeFileSync(filePath, data);
            res.download(filePath, file_name, (err) => {
                if (err) {
                    console.error(err);
                }
                // delete the file from the downloads folder after download
                fs.unlinkSync(filePath);
            });
        }
    });
}


exports.postReport = async (req, res) => {

    try {
        const { patient_name, symptoms, test, date, pid } = req.body.data;
        const query =
            "INSERT INTO reports(patient_name, symptoms, test, pid, date) VALUES ($1, $2, $3, $4, $5)";
        const values = [patient_name, symptoms, test, pid, date]

        await client.query(query, values, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error uploading file");
            } else {
                res.send("symptoms data uploaded successfully");
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }

}

exports.updateReport = async (req, res) => {

    try {
        const { filename, mimetype, size } = req.file;
        const data = fs.readFileSync(path.join("uploads/", filename));
        const query =
            "UPDATE reports SET file_name = $5, mime_type = $6, data = $7 WHERE pid = $8";
        const values = [filename, mimetype, data, pid]

        await client.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Internal server error" });
            }
            else if (result.rowCount === 0) {
                res.status(404).json({ message: "No reports found" });
            }
            else {
                res.status(200).json({ message: "Report updated successfully" });
            }
        });
    }

    catch (error) {
        res.status(500).json({ error: "Internal server error" });

    }

}

exports.updateReportd = async (req, res) => {
    try {

        const { diagnosis, id } = req.body;
        const query =
            "UPDATE reports SET diagnosis = $1 WHERE id = $2";
        const values = [diagnosis, id]

        await client.query(query, values, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Internal server error" });
            }
            else {
                res.status(200).json({ message: "Report updated successfully", result: result.rows });
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });

    }
}