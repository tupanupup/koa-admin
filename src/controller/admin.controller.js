const jwt = require('jsonwebtoken');

const { create, getInfo } = require('../service/admin.service');
const { getRolesByAdminId } = require('../service/admin_role_relation.service');
const { JWT_PRIVATE_KEY, TOKEN_EXPIRES_IN } = require('../config/config.default');
const { userRegisterError } = require('../constants/err.type');

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
      // eslint-disable-next-line no-unused-vars
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

  // 获取用户信息。将用户信息和对应的角色信息一起返回
  async getUserInfo(ctx) {
    const { authorization } = ctx.request.headers;
    const decode = jwt.decode(authorization, {complete: true});
    const id = decode.payload;
    // 查询用户信息
    const userInfo = await getInfo(id);
    // 查询用户对应的角色列表
    const roles = await getRolesByAdminId(userInfo.id);
    ctx.body = {
      code: 0,
      message: '查询成功',
      result: {
        ...userInfo,
        userId: userInfo.id,
        roles: roles.map((item) => ({
          roleName: item.name,
          value: item.name,
        })),
      },
    }
  }
}

module.exports = new AdminController();
