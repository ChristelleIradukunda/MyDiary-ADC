import notes from '../Models/db';

const Delete = (req, res) => {
    let find = notes.find(item => {
      return item.id === parseInt(req.params.id);
    });
  
    if (find) {
      let index = notes.indexOf(find);
      notes.splice(index, 1);
      res.sendStatus(204);
    }
  
    else {
        res.status(404).json({
          message: 'Entry not found',
          status: 404
        });
      }};
  
  export default Delete;
  