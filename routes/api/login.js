/**
 * router/api/users.js
 *
 * @description :: Describes the users api routes
 * @docs        :: TODO
 */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('koa-router')({ sensitive: true })

const User = require('../../db/users')

router.prefix('/api/login')

router.post('/', async (ctx, next) => {
    const { email, password } = ctx.request.body

    const user = await User.findOne({ where: { email } })
    
    if (!user) {
        ctx.status = 400
        ctx.body = {
            success: false
        }
        return
    }

    if (bcrypt.compareSync(password, user.dataValues.password)) {
        delete user.dataValues.password
        const token = jwt.sign({ email: user.dataValues.email }, process.env.JWT_SECRET)
        ctx.body = {
            success: true,
            token
        }
        return
    }
    
    ctx.body = {
        message: 'ok'
    }
})

module.exports = router
