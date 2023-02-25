const { connectDb, client } = require("../config/db");

const createPatientTable = async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS patients (
        id SERIAL ,
        pid varchar(100)  PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        citizenship VARCHAR(100) NOT NULL,
        age INT NOT NULL,
        password VARCHAR(255) NOT NULL
    );`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createPatientTable;
