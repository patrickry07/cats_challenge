const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/dist')));



app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000!');
});
