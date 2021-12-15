const User = require('../model/admin.model');

class AdminService {
  // 创建用户
  async create(username, password) {
    const result = await User.create({username, password});
    console.log(result);
    return result.dataValues;
  }

  // 获取用户信息
  async getInfo({ id, username, password, email, nick_name }) {
    const whereOpt = {};
    id && Object.assign(whereOpt, { id });
    username && Object.assign(whereOpt, { username });
    password && Object.assign(whereOpt, { password });
    email && Object.assign(whereOpt, { email });
    nick_name && Object.assign(whereOpt, { nick_name });
    const result = await User.findOne({
      attributes: ['id', 'username', 'password', 'icon', 'email', 'nick_name', 'note', 'login_time', 'status', 'create_time', 'update_time'],
      where: whereOpt
    });
    return result ? result.dataValues : null;
  }
}

module.exports = new AdminService();