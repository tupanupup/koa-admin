const Router = require('koa-router');

const { cryptPassword, verifyLogin, verifyToken} = require('../middleware/admin.middleware');

const { register, login, getUserInfo } = require('../controller/admin.controller');

const router = new Router({
  // 添加前缀
  prefix: '/admin'
});

// 用户注册
router.post('/register', cryptPassword, register);

// 用户登录
router.post('/login', verifyLogin, login);

// 获取用户信息
router.get('/getUserInfo', verifyToken, getUserInfo);

module.exports = router;
