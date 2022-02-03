/**
 * 错误类型常量
 */

module.exports = {
  userFormatError: {
    code: '10001',
    message: '用户名或密码为空',
    result: ''
  },
  userAlreadyExited: {
    code: '10002',
    message: '用户已存在',
    result: ''
  },
  userRegisterError: {
    code: '10003',
    message: '用户注册失败',
    result: ''
  },
  userDoesNotExist: {
    code: '10004',
    message: '用户不存在，请检查用户名或密码',
    result: '',
  },
  userLoginError: {
    code: '10005',
    message: '用户登录失败',
    result: '',
  },
  invalidPassword: {
    code: '10006',
    message: '密码不匹配',
    result: '',
  },
  updatePasswordError: {
    code: '10007',
    message: '修改密码失败',
    result: '',
  },
  tokenExpiredError: {
    code: '10101',
    message: 'token已过期',
    result: ''
  },
  jsonWebTokenError: {
    code: '10102',
    message: '无效的token',
    result: ''
  },
  verifyTokenError: {
    code: '10103',
    message: '没有携带token',
    result: '',
  }
};

