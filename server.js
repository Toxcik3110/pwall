require('babel-register');
const Koa = require('koa');
const send = require('koa-send');
const path = require('path');
const app = new Koa();


// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

app.use(async (ctx) => {
  await send(ctx, ctx.path, { root: __dirname + '/build' });
})

// app.use(async (ctx) => {
//   if ('/' == ctx.path) return ctx.body = 'Try GET /package.json';
//   await send(ctx, ctx.path);
// })

app.listen(3000);
console.log('APP STARTED!');