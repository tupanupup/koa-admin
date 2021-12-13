/**
 * 通过 dotenv，获取项目下的 .env 文件，将写好键值对读取到 process.env 中
 */

const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  console.error(result.error);
}

module.exports = process.env;
