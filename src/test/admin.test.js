const bcrypt = require('bcryptjs');

const password = '123456';

const salt = bcrypt.genSaltSync(10);

console.log('bcrypt.hashSync(password, salt) ', bcrypt.hashSync(password, salt));
console.log('bcrypt.hashSync(password, salt) ', bcrypt.hashSync(password, salt));
console.log('bcrypt.hashSync(password, salt) ', bcrypt.hashSync(password, salt));
console.log('bcrypt.hashSync(password, salt) ', bcrypt.hashSync(password, salt));
console.log('bcrypt.hashSync(password, salt) ', bcrypt.hashSync(password, salt));
console.log('bcrypt.hashSync(password, salt) ', bcrypt.hashSync(password, salt));
console.log('bcrypt.hashSync(password, salt) ', bcrypt.hashSync(password, salt));
