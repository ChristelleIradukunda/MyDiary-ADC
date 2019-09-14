import notes from '../Models/db'; 

const PostEntry= (req, res) => {
let newEntry = {
    id: parseInt(req.body.id), 
    title: req.body.title,
    entry: req.body.entry, 
    Created_On: new Date()
  };

  notes.push(newEntry);
  res.status(201).json(newEntry);

};

export default PostEntry;