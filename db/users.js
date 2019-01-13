const sequelize = require('./index')
const Sequelize = require('sequelize')
const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING
  }, {
      timestamps: false
  });
// sequelize.sync()

//   sequelize.sync()
//     .then(() => User.findAll({
//         attributes: ['id', 'name', 'email']
//     }))
//     .then(result => {
//         console.log(result)
//     });

module.exports = User
