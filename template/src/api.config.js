export default function apiConfig (api) {
  // 设置默认请求域名
  if (process.env.NODE_ENV === 'development') {
    // 生产模式
    api.setBaseUrl('https://api.test.com/')
  } else {
    api.setBaseUrl('https://api.com/')
  }
}
