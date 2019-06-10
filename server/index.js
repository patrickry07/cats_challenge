const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.get('/cats', (req, res)=>{

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
