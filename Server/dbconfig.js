const { Pool } = require('pg');

const trial = {
  user: 'postgres',
  database: 'MyDiary-adc',
  password: 'Terry2',
  port: 5432,
};
const pool = new Pool(trial);

pool.on('connect', () => {
  console.log('connected to the Database');
});
const Tables = () => {
    const myDiaryTable = `CREATE TABLE IF NOT EXISTS
        Entry(
          EntryID INT PRIMARY KEY,
          Title VARCHAR(128) NOT NULL,
          Description VARCHAR(128) NOT NULL,
          Date DATE NOT NULL
        )`;

        const myDiaryUsers = `CREATE TABLE IF NOT EXISTS
        Users(
          UserID INT PRIMARY KEY,
          First_Name VARCHAR(128) NOT NULL,
          Second_Name VARCHAR(128) NOT NULL,
          Email VARCHAR NOT NULL,
          UserName VARCHAR (50) NOT NULL,
          Password VARCHAR NOT NULL,
          Confirm_Password VARCHAR NOT NULL
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
 
module.exports = Tables, pool;

require('make-runnable');
