/**
 * router/api/contenido.js
 *
 * @description :: Describes the content api routes
 * @docs        :: TODO
 */
const router = require('koa-router')({ sensitive: true })

router.prefix('/api/contenido')

router.get('/', async (ctx, next) => {
    ctx.body = {
        success: true
    }
})

module.exports = router
