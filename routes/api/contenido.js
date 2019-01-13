/**
 * router/api/users.js
 *
 * @description :: Describes the users api routes
 * @docs        :: TODO
 */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('koa-router')({ sensitive: true })

// const User = require('../../db/users')

router.prefix('/api/contenido')

router.get('/', async (ctx, next) => {
    ctx.body = {
        success: true
    }
})

module.exports = router
