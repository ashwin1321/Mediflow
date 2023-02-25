const { connectDb, client } = require("../config/db");

const mapPatientReportTable = async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS patientreport (
        id SERIAL primary key,
        pid varchar(100) NOT NULL,
        rid varchar(100) NOT NULL,
        FOREIGN KEY (pid) REFERENCES patients(pid),
        FOREIGN KEY (rid) REFERENCES reports(rid)
    );`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mapPatientReportTable;
