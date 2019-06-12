const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');



const app = express();

app.use(express.static(path.join(__dirname, '../react-client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create get request to allow for initial sending of cats data to front-end
app.get('/cats', (req, res)=>{
  db.Cats.findAll({})
    .then((cats) => {
      res.send(cats)
    })
})

// create endpoint for editing the viewcount for a cat
app.put('/view/:id/:views', (req,res)=>{
  let {id, views} = req.params;
  db.Cats.update({
    views: parseInt(views),
  }, {
      where: {
        id: id
      }
    })
  .then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    res.send(err);
  })
})

//create endpoint to handle deleting cat row
app.delete('/delete/:id', (req, res)=>{
  let { id } = req.params
  db.Cats.destroy({
    where: {
      id: id
    }
  })
})

// create endpoint to handle editing of cat details
app.post('/edit', (req, res)=>{
  let cat = req.body
  db.Cats.update({
    name: cat.name,
    owner_name: cat.owner_name,
    birthdate: cat.birthdate,
    thumnail: cat.thumbnail
  }, {
      where: {
        id: cat.id
      }
    })
    .then((result)=>{
      console.log(result)
    })
    .catch((err)=>{
      console.log(err)
    })
})



db.sequelize
  .sync()
  .then(result => {
    console.log('succesfully connected to database', result);
  })
  .catch(err => {
    console.log('could not connect to database', err);
  })

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000!');
});
