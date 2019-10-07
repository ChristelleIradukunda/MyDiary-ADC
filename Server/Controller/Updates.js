import notes from '../Models/db';


const UptoDate = (req, res) => {
  const search = notes.find(item => item.id === parseInt(req.params.id));
  if (!search) res.status(404).send('Entry of this entry is not exist');

    search.title = req.body.title,
      search.entry = req.body.entry,

    res.send(search);

};

//     return res.status(200).json({
//       status: 200,
//       message: "Successful",
//       data: {
//         id: search.id,
//         title: search.title,
//         entry: search.entry,
//         Date: moment().format('LL'),
//       }
//     })
//   } else {
//     res.sendStatus(404).json;
//   }
// };


export default UptoDate;