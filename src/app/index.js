const path = require('path');

const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');

const router = require('../router');
const errorHandler = require('./errorHandler');

const app = new Koa();

app
  .use(KoaBody())
  // 设置静态资源目录
  .use(KoaStatic(path.join(__dirname, '../../public')))
  .use(router.routes())
  .use(router.allowedMethods());

// 全局错误处理
app.on('error', errorHandler);

module.exports = app;
