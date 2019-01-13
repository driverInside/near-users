/**
 * routes/index.js
 *
 * @description :: Defines routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })

const isAuth = require('../middleware/isAuth')

const usersPai = require('./api/users')
router.use('', usersPai.routes(), usersPai.allowedMethods())
const login = require('./api/login')
router.use('', login.routes(), login.allowedMethods())
const contenido = require('./api/contenido')
router.use(isAuth, contenido.routes(), contenido.allowedMethods())

module.exports = router
