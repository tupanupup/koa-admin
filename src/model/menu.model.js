const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const Menu = seq.define('menu', {
  parent_id: {
    type: DataTypes.BIGINT,
    comment: '父级id'
  },
  title: {
    type: DataTypes.STRING(100),
    comment: '菜单名称'
  },
  level: {
    type: DataTypes.INTEGER,
    comment: '菜单级数'
  },
  sort: {
    type: DataTypes.INTEGER,
    comment: '菜单排序'
  },
  name: {
    type: DataTypes.STRING(100),
    comment: '前端名称'
  },
  icon: {
    type: DataTypes.STRING(200),
    comment: '前端图标'
  },
  hidden: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    comment: '前端菜单是否隐藏：0->显示；1->隐藏'
  }
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time'
});

// seq.sync({ force: true }).then(() => {
//   console.log('菜单模型创建成功！')
// });

module.exports = Menu;
