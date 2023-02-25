const { connectDb, client } = require("../models/db");

const createReportTable = async () => {
  try {
    await client.query(
      "CREATE TABLE IF NOT EXISTS report (" +
        "rid varchar(100) PRIMARY KEY," +
        "name VARCHAR(255) NOT NULL," +
        "size INTEGER NOT NULL," +
        "mimetype VARCHAR(255) NOT NULL," +
        "data BYTEA," +
        "pid varchar(100) NOT NULL," +
        "FOREIGN KEY (pid) REFERENCES patients(pid) ON DELETE CASCADE" +
        ")"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = createReportTable;
