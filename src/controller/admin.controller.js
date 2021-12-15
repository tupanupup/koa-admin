const jwt = require('jsonwebtoken');

const { create, getInfo } = require('../service/admin.service');
const { JWT_PRIVATE_KEY, TOKEN_EXPIRES_IN } = require('../config/config.default');
const {userRegisterError} = require('../constants/err.type');

class AdminController {
  // 注册用户
  async register(ctx) {
    try {
      // 获取参数
      const { username, password } = ctx.request.body;
      // 创建用户
      const result = await create(username, password);
      // 返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: result.id,
          username: result.username
        }
      };
    } catch (error) {
      console.error(error);
      console.log('用户注册失败');
      ctx.app.emit('error', userRegisterError, ctx);
    }
  }

  // 用户登录
  async login(ctx) {
    const { username } = ctx.request.body;

    try {
      // 获取用户信息，剔除掉 password
      const { password, ...result } = await getInfo({ username });
      // 生成 token 并返回
      const token = jwt.sign(result, JWT_PRIVATE_KEY, {
        expiresIn: TOKEN_EXPIRES_IN
      });
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token
        }
      }
    } catch (error) {
      console.error(error);
      console.log('生成token失败');
    }
  }
}

module.exports = new AdminController();
