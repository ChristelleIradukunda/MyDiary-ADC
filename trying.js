const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I can do this');

});

let ter = [{
    id: 1,
    amazina: "Christelle",
    umushahara: 540000
},
{
    id:2,
    amazina: "Christian",
    umushahara: 740000
}
];

app.use('/api/testing', (req,res) => {
res.send(ter);

});

app.get('/api/testing/:id', (req, res) => {
const finder = ter.find(items => items.id === parseInt(req.params.id));
 if(!finder) res.status(404).send('Amazina ntabonetse')
res.send(ter);

});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port 3000 ${port}`));
