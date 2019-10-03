import notes from '../Models/db';

const Delete = (req, res) => {
  const find = notes.find((item) => item.id === parseInt(req.params.id, 10));
  if (find) {
    const index = notes.indexOf(find);
    notes.splice(index, 1);
    res.sendStatus(204);
  }
  else {
    res.status(404).json({
      message: 'Entry not found',
      status: 404,
    });
  }
};

export default Delete;
