// controller to create read and delete routes
const { connectDb, client } = require("../config/db");


exports.getReports = async (req, res) => {
    try {
        const id = req.params.id;

        const query = "SELECT * FROM reports WHERE patient_id = $1";
        const values = [id];

        const result = await client.query(query, values);

        if (result.rowCount === 0) {
            return res.json({ message: "No reports found" });
        }

        res.status(200).json({ reports: result.rows });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });

    }
}

exports.downloadReport = async (req, res) => {
    const fileId = req.params.id;
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
        const { filename, mimetype, size } = req.file;
        const { patient_name, symptoms, test, diagnosis, pid } = req.body;

        const data = fs.readFileSync(path.join("uploads/", filename));

        const query =
            "INSERT INTO reports(patient_name, symptoms, test, diagnosis, file_name, mime_type, data, pid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
        const values = [patient_name, symptoms, test, diagnosis, filename, mimetype, data, pid]

        await client.query(query, values, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error uploading file");
            } else {
                res.send("File uploaded successfully");
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
        const { patient_name, symptoms, test, diagnosis, pid } = req.body;

        const data = fs.readFileSync(path.join("uploads/", filename));

        const query =
            "UPDATE reports SET patient_name = $1, symptoms = $2, test = $3, diagnosis = $4, file_name = $5, mime_type = $6, data = $7 WHERE pid = $8";
        const values = [patient_name, symptoms, test, diagnosis, filename, mimetype, data, pid]

        const result = await client.query(query, values);

        if (result.rowCount === 0) {
            return res.json({ message: "No report found" });
        }
        res.status(200).json({ message: "Report updated successfully" });
    } catch (error) {

    }

}