const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: `${process.env.DB_PASS}`,
  port: "5432",
});

const connectDb = async () => {
  try {
    await client.connect();
    console.log(`Connected to ${process.env.DB_NAME} database`);
  } catch (error) {
    console.log(error);
  }
};

connectDb();
module.exports = { connectDb, client };
