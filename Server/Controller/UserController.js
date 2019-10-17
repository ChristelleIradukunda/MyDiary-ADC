import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool } from '../dbconfig';

dotenv.config();
//=================================================== Sing Up ===============================================
const signUpUser = async(req, res) => {
    
  const take = req.body.Email;
  const findemail = 'SELECT * FROM users WHERE email= $1';
  const user = await pool.query(findemail, [take]);
  if (user.rows[0]) {
      return res.status(400).send({
          status: 400,
          message: 'Email exist',
      });
  }
  const hide = bcrypt.hashSync(req.body.password.trim(), 10);
    let addNew = {
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        email: req.body.email,
        userName: req.body.userName,
        password: hide
  };
  const query = 'INSERT INTO users(first_name, second_name, email, userName, password) VALUES($1,$2,$3,$4,$5) RETURNING *';
  
  const info = [addNew.first_name, addNew.second_name, addNew.email, addNew.userName, addNew.password];
  const result = await pool.query(query, info);

  
  const { userid, first_name, second_name, email, userName } = result.rows[0];
  const keep = { userid, first_name, second_name, email, userName }
  const token = jwt.sign(keep, process.env.SECRET_KEY, { expiresIn: '1year' });
  return res.status(201).send({
      status: 201,
      message: 'Account Created Successfully',
      token,
      data: result.rows[0],
  });
};


//=============================================== Sign In ===============================================

const UserSignIn = async(req, res) => {
   
    const take = req.body.email;
    const check = 'SELECT * FROM users WHERE email= $1';
    const {
        rows
    } = await pool.query(check, [take]);
    if (!rows[0]) {
        return res.status(400).send({
            status: 400,
            message: 'incorrect email or password',
        });
    }
    const pwd = bcrypt.compareSync(req.body.password.trim(), rows[0].password);
    if (!pwd) {
        return res.status(400).send({
            status: 400,
            message: 'incorrect email or password',
        });
    }
    const { userid, first_name, second_name, email, username } = rows[0];
    const keep = { userid, first_name, second_name, email, username }
    const token = jwt.sign(keep, process.env.SECRET_KEY, { expiresIn: '1year' });
    return res.status(200).send({
        status: 200,
        message: ' Successfully logged in',
        token,
        data: rows[0],
    });
 }

export { signUpUser,UserSignIn};