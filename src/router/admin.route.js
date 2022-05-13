const Router = require('koa-router');

const { cryptPassword, verifyLogin, verifyToken } = require('../middleware/admin.middleware');

const { register, login, getUserInfo, changeAvatar } = require('../controller/admin.controller');

const router = new Router({
  // 添加前缀
  prefix: '/admin'
});

const upload = require('../upload');

// 用户注册
router.post('/register', cryptPassword, register);

// 用户登录
router.post('/login', verifyLogin, login);

// 获取用户信息
router.get('/getUserInfo', verifyToken, getUserInfo);

// 修改头像
router.post('/changeAvatar', verifyToken, upload.single('file'), changeAvatar);

module.exports = router;
