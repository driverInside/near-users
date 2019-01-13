/**
 * server.js
 *
 * @description :: Loads server configuration
 */
require('dotenv').config()

const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-body')

const app = new Koa()

const routes = require('./routes')

app.use(cors())

app.use(bodyParser({
  multipart: true,
  json: true
}))

// routes
app.use(routes.routes(), routes.allowedMethods())

app.listen(4100, () => {
    console.log(`server listening on port 4100`)
})

module.exports = app