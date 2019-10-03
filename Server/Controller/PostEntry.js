import joi from 'joi';
import notes from '../Models/db'; 
import moment from 'moment';

const PostEntry= (req, res) => {
const schema ={
  title: joi.string().min(3).required(),
  entry: joi.string().required()
};
const result =  joi.validate(req.body, schema); 

if (result.error){
  res.status(400).send(result.error.details[0].message);
  return;
} 
 const identifier = parseInt(notes.length + 1);
 const {title, entry} = req.body;
let newEntry = {identifier, title, entry, Date: moment().format('LL')
  };

  notes.push(newEntry);
  res.status(201).json(newEntry);
};

export default PostEntry;

