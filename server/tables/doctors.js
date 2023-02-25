const { connectDb, client } = require("../config/db");

const createDoctorTable = async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS doctors (
        id SERIAL ,
        did varchar(100)  PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(255) NOT NULL
    );`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createDoctorTable;
