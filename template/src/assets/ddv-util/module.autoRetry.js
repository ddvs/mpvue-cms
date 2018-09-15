import util from 'ddv-util'
export default moduleAutoRetry

function moduleAutoRetry (ddvUtil) {
  // 扩展 ddvApi
  // 扩展 ddvUtil 中的 autoRetry
  ddvUtil.autoRetry = ddvUtil.api.autoRetry
  // 监听 autoRetry 开始事件
  ddvUtil.autoRetry.onBegin(res => {})
  // 监听 autoRetry 成功事件
  ddvUtil.autoRetry.onThen(res => {
    // 成功 - 直接返回
    return res
  })
  // 监听 autoRetry 异常事件
  ddvUtil.autoRetry.onCatch((e, resolve, reject, reTry, options = {}) => {
    // 没有登录
    if (e.errorId === 'NO_ACCOUNT_LOGIN') {
      var isOpenLoginBox = ddvUtil.$loginBox.isOpen()
      var isRedirectLogin = false
      if (options && options.onLoginNeed) {
        if (util.isFunction(options.onLoginNeed)) {
          var res = options.onLoginNeed(e, resolve, reject, reTry, options)
          if (res && res.then) {
            res.then(resolve, reject)
          }
          isOpenLoginBox = false
        } else if (options.onLoginNeed === 'back') {
          ddvUtil.getVueRoute.back()
          isOpenLoginBox = false
        } else if (options.onLoginNeed === 'none') {
          isOpenLoginBox = false
        } else if (options.onLoginNeed === 'toLoginPage') {
          isOpenLoginBox = false
          isRedirectLogin = true
        }
      } else {
        isRedirectLogin = true
      }
      if (isOpenLoginBox) {
        ddvUtil.$loginBox.open()
          .then(res => {
            // 登录成功，再试一次
            reTry()
          })
          .catch(e => {
            if (options && options.onLoginCancel) {
              if (util.isFunction(options.onLoginCancel)) {
                options.onLoginCancel(e, resolve, reject, reTry, options)
              } else if (options.onLoginCancel === 'back') {
                ddvUtil.getVueRoute.back()
              } else if (options.onLoginCancel === 'reject') {
                reject(e)
              } else if (options.onLoginCancel === 'none') {
                // 清空内存
              } else {
                wx.showToast({
                  title: e.message || '取消操作',
                  icon: 'none'
                })
              }
            } else {
              wx.showToast({
                title: e.message || '取消操作',
                icon: 'none'
              })
            }
          })
      } else if (isRedirectLogin) {
        // 重定向到登录页
        wx.redirectTo({
          url: '/pages/login'
        })
      }
    } else if (e === 'cancel') {
      wx.showToast({
        title: '取消操作',
        icon: 'none'
      })
    } else if (e.name === 'CancelError') {
      wx.showToast({
        title: e.message || '取消输入',
        icon: 'none'
      })
    } else {
      if (e.errorId === 'UNKNOW_ERROR' || e.message === 'Unknow Error') {
        wx.showToast({
          title: '网络不稳定，请重试',
          image: '/static/icon-error.png'
        })
      } else {
        wx.showToast({
          title: e.message || e || '未知错误',
          image: '/static/icon-error.png'
        })
      }
    }
  })
}
