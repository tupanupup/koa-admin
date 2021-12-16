const Router = require('koa-router');

const { cryptPassword, verifyLogin } = require('../middleware/admin.middleware');

const { register, login } = require('../controller/admin.controller');

const router = new Router({
  // 添加前缀
  prefix: '/admin'
});

// 用户注册
router.post('/register', cryptPassword, register);

// 用户登录
router.post('/login', verifyLogin, login);

module.exports = router;
