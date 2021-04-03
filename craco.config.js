const path = require('path');
const resolve = (dir) => path.join(__dirname, '.', dir);
module.exports = {
  webpack: {
    // 别名
    // alias: {
    //   'src': resolve('src'),
    // },
  },
};