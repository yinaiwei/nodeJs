const Koa = require('koa')

const app = new Koa()

// console.log(app);

app.use(async ctx =>{
    ctx.body = "hello,world"
})

app.listen(8889)