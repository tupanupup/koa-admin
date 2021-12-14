const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const Role = seq.define('role', {
  name: {
    type: DataTypes.STRING(100),
    comment: '前端名称'
  },
  description: {
    type: DataTypes.STRING(500),
    comment: '描述'
  },
  admin_count: {
    type: DataTypes.INTEGER,
    comment: '后台用户数量'
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    comment: '启用状态：0->禁用；1->启用'
  },
  sort: {
    type: DataTypes.INTEGER,
    comment: '排序'
  },
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time'
});

// seq.sync({ force: true }).then(() => {
//   console.log('角色模型创建成功！')
// });

module.exports = Role;
