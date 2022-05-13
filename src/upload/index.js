const path = require('path');
const multer = require('@koa/multer');

const storage = multer.diskStorage({
  // 配置图片上传的目录
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/upload'));
  },
  // 图片上传完成后重命名
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
module.exports = upload;
