const Koa = require('koa');
const fs = require('fs');

const a = require('./a');
const b = require('./b');

const app = new Koa();

app.use(async ctx => {
	const h = new Date();

	const x = () => {
		return 1;
	}

	if (x === 1) {

	}

	console.log('1110');
  ctx.body = "hello,world";
});

app.listen(8889);