import moment from 'moment';
import { pool } from '../dbconfig';

const PostEntry= (req, res) => {

const {title, description} = req.body;
let newEntry =  [title, description, moment().format('LL')]
 

 pool.connect((err, client, trial) => {
    const queries = 'INSERT INTO entry(title, description, date) VALUES($1,$2,$3) RETURNING *';
  
    client.query(queries, newEntry, (error, result) => {
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

//========================================= Get All ===============================================
const GetAll = async (req, res) => {
  const query = 'SELECT * FROM entry';
  const view = await pool.query(query);
  return res.status(200).json({
      status: 200,
      message: 'Data retrieved successfully',
      entries: view.rows,
  });
};


//============================================= Get One ======================================================

const GetOne = async (req, res) => {
  const id = parseInt(req.params.id);
  const qry = 'SELECT * FROM entry WHERE id = $1';
  const {rows} = await pool.query(qry,[id]);
  if(!rows.length > 0) {
    return res.status(404).json({status : 404, message : 'entry not found' })
  }
    else {
      return res.status(200).json({
        status : 200,
        message : 'entry retrieved successfully',
        data : rows[0]
      })
    }
  };
export {PostEntry, GetAll, GetOne};

