/**
 * 配置数据库连接
 */

const { Sequelize } = require('sequelize');

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB
} = require('../config/config.default');

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
});

seq.authenticate().then(() => {
  console.log('连接数据库成功...');
}).catch(error => {
  console.error(error);
});

module.exports = seq;
