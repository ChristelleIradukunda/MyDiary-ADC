import notes from '../Models/db'; 

const UptoDate= (req, res) => {
    let search = notes.find(item => item.id === parseInt(req.params.id))
    if(search){
        
let igihe = {

    id: parseInt(req.body.id), 
    title: req.body.title,
    entry: req.body.entry, 
    Created_On: new Date()
  };

  let DoIt = notes.indexOf(search);

    notes.splice(DoIt, 1, igihe);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }};

export default UptoDate;