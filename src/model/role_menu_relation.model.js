const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const RoleMenuRelation = seq.define('role_menu_relation', {
  role_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    comment: '角色id'
  },
  menu_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    comment: '菜单id'
  }
});

// seq.sync({ force: true }).then(() => {
//   console.log('角色与菜单关联模型创建成功！')
// });

module.exports = RoleMenuRelation;
