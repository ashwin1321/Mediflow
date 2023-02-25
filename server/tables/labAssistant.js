const { connectDb, client } = require("../config/db");

const createLabTable = async () => {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS lab (
        id SERIAL ,
        lid varchar(100)  PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(255) NOT NULL
    );`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createLabTable;
