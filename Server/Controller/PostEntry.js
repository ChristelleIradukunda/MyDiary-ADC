
import moment from 'moment';
import pool from '../dbconfig';
const PostEntry= (req, res) => {

const {title, description} = req.body;
let newEntry = { title, description, Date: moment().format('LL')
 };


 pool.connect((err, client, trial) => {
    const queries = 'INSERT INTO Entry(EntryID,Title, Description, Date) VALUES($1,$2,$3) RETURNING *';
    const values = [newEntry];
  
    client.query(queries, values, (error, result) => {
      trial();
      if (error) {
        return res.status(400).json({ error });
      }
      return res.status(202).send({
        status: 202,
        result: result.rows[0],
      });
    });
});
}
export default PostEntry;