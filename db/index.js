/**
 * db/index.js
 *
 * @description :: Defines db connection
 * @docs        :: TODO
 */
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
})

module.exports = sequelize
