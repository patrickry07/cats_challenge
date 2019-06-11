
// const {username, password, host} = require('../config')
require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = new Sequelize('levelset', 'root', process.env.MYSQL, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Cats = sequelize.define('cats', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  thumbnail: Sequelize.STRING,
  name: Sequelize.STRING,
  
  birthdate: Sequelize.STRING,
  owner_name: Sequelize.STRING,
  views: Sequelize.INTEGER,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: sequelize.fn('NOW')
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: sequelize.fn('NOW')
  }
})

function getCats () {
  Cats.findAll({})
    .then((cats)=>{
      return cats;
    })
}











module.exports.sequelize = sequelize;
module.exports.Cats = Cats;

