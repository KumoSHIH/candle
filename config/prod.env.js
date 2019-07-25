'use strict'
module.exports = {
  NODE_ENV: '"production"',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/candle/'
    : '/'
  // APIPATH: '"https://vue-course-api.hexschool.io"',
  // CUSTOMPATH: '"candle"',
}
