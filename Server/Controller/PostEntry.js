import moment from 'moment';
import { pool } from '../dbconfig';


//=================================== Post Entry===================================================

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
      return res.status(200).send({
        status: 201,
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
//===================================================== Delete =========================================================

const Delete = async (req, res) => {

  const query = 'DELETE FROM entry WHERE id = $1 RETURNING *';
  const data = [parseInt(req.params.id)];

  const remove = await pool.query(query, data);
  if (remove.rows === 1) {
      res.status(404).json({
          status: 404,
          message: 'Entry not found'
      });
  }
  else {
      res.status(200).json({
          status: 200,
          message: 'Deleted successfully',
          
      });
  }
};
//=============================================== Modify Entry ======================================================

const Update = async (req, res) =>  {
  const finder = 'SELECT * FROM entry WHERE id=$1';
  const updateOne =`UPDATE entry SET title=$1, description=$2 WHERE id=$3 RETURNING *`;

  try {

    const { rows } = await pool.query(finder, [parseInt(req.params.id)]);
    if(!rows[0]) {
      return res.status(404).send({'message': 'Entry not found'});
    }
    const dat = [
      req.body.title || rows[0].title,
      req.body.description || rows[0].description,
      parseInt(req.params.id)
      
      
    ];
    const result = await pool.query(updateOne, dat);
    return res.status(200).send(result.rows[0]);
  } catch(err) {
    return res.status(400).send(err);
  }
}
 
export { PostEntry, GetAll, GetOne, Delete, Update };

