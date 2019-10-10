import notes from '../Models/db';
import moment from 'moment';


const UptoDate = (req, res) => {
  const search = notes.find(item => item.id === parseInt(req.params.id));
  if (!search) res.status(404).send('Entry of this entry is not exist');

    search.title = req.body.title,
      search.entry = req.body.entry,
      search.Date = moment().format('LL')
  

    res.send(search);

};

export default UptoDate;
