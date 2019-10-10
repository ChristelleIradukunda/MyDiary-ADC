import notes from '../Models/db'; 

const getone= (req, res) => {
    let found = notes.find(item => item.id === parseInt(req.params.id));
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(404).json({
        message: 'Item not found',
        status: 404
      });
    }
  };

  
export default getone;