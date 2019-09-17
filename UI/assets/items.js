import express from 'express';
const router = express.Router();
const data = [
    {
        id: 1, 
        title: 'Friday Dreams',
         Entry: 'Flying with highheels at in comedy night', 
          Created_On: new Date()},
    {id: 2, 
        title: 'Secret',
         entry:"I wish to be tall like Tinna",
          Created_On: new Date()},
    {
        id: 3, title: 'Cartel Rub',
         entry:'Redamption song', 
         Created_On: new Date()
    },
    {
        id: 4, 
        title: 'Terrible Travel',
         entry:'Dark journey', 
         Created_On: new Date()},
    {
        id: 5, 
        title: 'Wishes', 
        entry:' thinks critically and form my own ....', 
        Created_On: new Date()},
    {
        id: 6, 
        title: 'Notes for December',
         entry:' Activity', 
         Created_On: new Date()
        },
];

// ====================================== Get all entry ===================================================

router.get('/', function (req, res){
    res.status(200).json(data);
});

// ====================================== Specific entry ==========================================
router.get('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// module.exports = router;

export default router;

//============================================ Post ===================================================

// router.put('/:id', function (req, res) {
//     let found = data.find(function (item) {
//       return item.id === parseInt(req.params.id);
//     });
  
//     if (found) {
//       let updated = {
//         id: found.id,
//         title: req.body.title,
//         entry: req.body.entry,
//         Created_On: req.body.Created_On
//       };
  
//       let targetIndex = data.indexOf(found);
  
//       data.splice(targetIndex, 1, updated);
  
//       res.sendStatus(204);
//     } else {
//       res.sendStatus(404);
//     }
//   });