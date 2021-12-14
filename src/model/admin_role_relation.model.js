const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const AdminRoleRelation = seq.define('admin_role_relation', {
  admin_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    comment: '用户id'
  },
  role_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    comment: '角色id'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

// seq.sync({ force: true }).then(() => {
//   console.log('用户与角色关联模型创建成功！')
// });

module.exports = AdminRoleRelation;
