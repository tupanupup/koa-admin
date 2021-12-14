const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const Permission = seq.define('permission', {
  parent_id: {
    type: DataTypes.BIGINT,
    comment: '父级id'
  },
  name: {
    type: DataTypes.STRING(100),
    comment: '名称'
  },
  value: {
    type: DataTypes.STRING(200),
    comment: '权限值'
  },
  type: {
    type: DataTypes.INTEGER,
    comment: '权限类型：0->目录；1->菜单；2->按钮'
  },
  uri: {
    type: DataTypes.STRING(200),
    comment: '前端资源路径'
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    comment: '启用状态：0->禁用；1->启用'
  },
  sort: {
    type: DataTypes.INTEGER,
    comment: '排序'
  }
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time'
});

// seq.sync({ force: true }).then(() => {
//   console.log('权限模型创建成功！')
// });

module.exports = Permission;
