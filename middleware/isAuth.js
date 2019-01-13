const jwt = require('jsonwebtoken')
const isAuth = function (ctx, next) {
    try {
        const decoded = jwt.verify(ctx.headers.authorization, process.env.JWT_SECRET)
        return next()
      } catch(err) {
        ctx.status = 401
        ctx.body = {
            success: false,
            error: err
        }
        return
      }
}

module.exports = isAuth
