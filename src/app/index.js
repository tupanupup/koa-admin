const Koa = require('koa');
const KoaBody = require('koa-body');

const router = require('../router');
const errorHandler = require('./errorHandler');

const app = new Koa();

app
  .use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods());

// 全局错误处理
app.on('error', errorHandler);

module.exports = app;
