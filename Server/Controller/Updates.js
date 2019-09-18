import notes from '../Models/db';
import moment from 'moment';

const UptoDate = (req, res) => {
  let search = notes.find(item => item.id === parseInt(req.params.id))
  if (search) {
    search.title = req.body.title,
      search.entry = req.body.entry

    return res.status(200).json({
      status: 200,
      message: "Successful",
      data: {
        id: search.id,
        title: search.title,
        entry: search.entry,
        Date: moment().format('LL'),
      }
    })
  } else {
    res.sendStatus(404).json;
  }
};

export default UptoDate;