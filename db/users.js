/**
 * db/users.js
 *
 * @description :: Defines user model
 * @docs        :: TODO
 */
const sequelize = require('./index')
const Sequelize = require('sequelize')

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  email: { type: Sequelize.STRING, unique: true },
  password: Sequelize.STRING
}, {
  timestamps: false
})

module.exports = User
