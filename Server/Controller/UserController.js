import express from express;
import databaseConnect from 'databaseConnect';
const app = express();



const port = process.env.PORT || 3000;



   app.get('/', (req, res) => {
      res.send('Testing db');
   });


   app.listen(port, () => {
      console.log(`${port}`);
   });

app.get('/Users', (req, res) => {
    pool.connect((err, client, trial) => {
        const queries = 'SELECT * FROM Users';
        client.query(queries, (error, result) => {
          trial();
          if (error) {
            res.status(400).json({error})
          } 

          if(result.rows < '1') {
            res.status(404).send({
            status: 'Failed',
            message: 'No information found',
            });
          } else {
            res.status(200).send({
            status: 'Successful',
            message: 'Data retrieved',
            Users: result.rows,
            });
          }
        });
      });
    });
    
    
    