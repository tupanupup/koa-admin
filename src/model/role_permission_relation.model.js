const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const RolePermissionRelation = seq.define('role_permission_relation', {
  role_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    comment: '角色id'
  },
  permission_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    comment: '权限id'
  }
});

// seq.sync({ force: true }).then(() => {
//   console.log('角色与权限关联模型创建成功！')
// });

module.exports = RolePermissionRelation;
