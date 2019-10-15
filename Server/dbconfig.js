const { Pool } = require('pg');
const dotenv = require('dotenv');


dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});


pool.on('connect', () => {
  console.log('connected to the Database');
});
const Tables = () => {
    const myDiaryTable = `CREATE TABLE IF NOT EXISTS
        entry(
          id SERIAL PRIMARY KEY,
          title VARCHAR(128) NOT NULL,
          description VARCHAR(128) NOT NULL,
          date DATE NOT NULL
        )`;

        const myDiaryUsers = `CREATE TABLE IF NOT EXISTS
        users(
          userid INT PRIMARY KEY,
          first_name VARCHAR(128) NOT NULL,
          second_name VARCHAR(128) NOT NULL,
          email VARCHAR NOT NULL,
          userName VARCHAR (50) NOT NULL,
          password VARCHAR NOT NULL,
          confirm_password VARCHAR NOT NULL
        )`;
    const queries =`${myDiaryTable}; ${myDiaryUsers}`;
      pool.query(queries).then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };

  pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
  });
 
module.exports = {Tables, pool};

require('make-runnable');
