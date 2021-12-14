const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

// 定义 Admin 模型
const Admin = seq.define('admin', {
  // 不需要定义 id 字段，sequelize 会自动创建
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '密码'
  },
  icon: {
    type: DataTypes.STRING(500),
    comment: '头像'
  },
  email: {
    type: DataTypes.STRING(100),
    comment: '邮箱'
  },
  nick_name: {
    type: DataTypes.STRING(200),
    comment: '昵称'
  },
  note: {
    type: DataTypes.STRING(500),
    comment: '备注信息'
  },
  login_time: {
    type: DataTypes.DATE,
    comment: '最后登录时间'
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    comment: '账号启用状态：0->禁用；1->启用'
  }
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time'
});

// 将创建表,如果表已经存在,则将其首先删除
// 执行完后将其注释
// seq.sync({ force: true }).then(() => {
//   console.log('用户模型创建成功！')
// });

module.exports = Admin;
