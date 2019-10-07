import notes from '../Models/db';
import moment from 'moment';
const PostEntry= (req, res) => {

const identifier = parseInt(notes.length + 1);
const {title, entry} = req.body;
let newEntry = {identifier, title, entry, Date: moment().format('LL')
 };
 notes.push(newEntry);
 res.status(201).json(newEntry);
};
export default PostEntry;