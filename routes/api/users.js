/**
 * router/api/users.js
 *
 * @description :: Describes the users api routes
 * @docs        :: TODO
 */
const bcrypt = require('bcrypt')
const router = require('koa-router')({ sensitive: true })

const User = require('../../db/users')

router.prefix('/api/users')

router.post('/', async (ctx, next) => {
  const { email, password, name } = ctx.request.body

  const encPass = bcrypt.hashSync(password, 10)

  const result = await User.create({
    password: encPass,
    email,
    name
  })
    .then((user) => {
      return {
        success: true,
        user: user.dataValues
      }
    })
    .catch(err => {
      console.error(err)
      return {
        success: false,
        error: err
      }
    })

  if (!result.success) {
    ctx.status = 400
    ctx.body = {
      success: false,
      error: result.error
    }
    return
  }
    
  ctx.body = {
    message: 'ok',
    email
  }
})

module.exports = router
