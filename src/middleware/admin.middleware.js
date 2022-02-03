const bcrypt = require('bcryptjs');

const { getInfo } = require('../service/admin.service');
const { userDoesNotExist, userLoginError, verifyTokenError } = require('../constants/err.type');

// 密码加密。将加密后的密码存到 ctx.request.body.password 中，交由下一个中间件使用
const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(10);
  ctx.request.body.password = bcrypt.hashSync(password, salt);
  await next();
}

// 验证用户是否登录
const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  try {
    const result = await getInfo({ username });
    if (!bcrypt.compareSync(password, result.password)) {
      ctx.app.emit('error', userDoesNotExist, ctx);
      return;
    }
    // if (!result) {
    //   // 用户不存在
    //   ctx.app.emit('error', userDoesNotExist, ctx);
    //   return;
    // }
  } catch (error) {
    console.error(error);
    console.log('获取用户信息失败');
    ctx.app.emit('error', userLoginError, ctx);
    return;
  }

  await next();
}

// 验证请求头中是否携带token
const verifyToken = async (ctx, next) => {
  const headers = ctx.request.headers;
  const { authorization } = headers;
  if (!authorization) {
    ctx.app.emit('error', verifyTokenError, ctx);
  }
  await next();
}

module.exports = {
  cryptPassword,
  verifyLogin,
  verifyToken,
};
