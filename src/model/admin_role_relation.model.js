const { DataTypes } = require('sequelize');

const seq = require('../db/seq');
const Admin = require('../model/admin.model');
const Role = require('../model/role.model');

const AdminRoleRelation = seq.define('admin_role_relation', {
  admin_id: {
    type: DataTypes.INTEGER,
    comment: '用户id',
    references: {
      model: Admin,
      key: 'id',
    },
  },
  role_id: {
    type: DataTypes.INTEGER,
    comment: '角色id',
    references: {
      model: Role,
      key: 'id',
    },
  }
}, {
  freezeTableName: true,
  timestamps: false
});

// 进行admin和role的多对多关联
Admin.belongsToMany(Role, { through: AdminRoleRelation, foreignKey: 'admin_id', });
Role.belongsToMany(Admin, { through: AdminRoleRelation, foreignKey: 'role_id', });

// seq.sync({ force: true }).then(() => {
//   console.log('用户与角色关联模型创建成功！')
// });

module.exports = AdminRoleRelation;
