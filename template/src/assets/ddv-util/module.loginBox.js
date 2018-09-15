import util from 'ddv-util'

export default moduleLoginBox

function moduleLoginBox (ddvUtil) {
  ddvUtil.$loginBox = new LoginBox(ddvUtil)
}

function LoginBox (ddvUtil) {
  this.ddvUtil = ddvUtil
  this.openCb = []
}
LoginBox.prototype = {
  open,
  openCb: [],
  openRun: null,
  isOpen,
  emitSuccess,
  emitFail,
  emitCancel,
  emitClose,
  handler,
  getLogin
}

function getLogin () {
  var e = new Error('没有登录')
  e.errorId = 'NO_ACCOUNT_LOGIN'
  return Promise.reject(e)
}

function handler (cb, opts = {
  onLoginCancel: 'none'
}) {
  this.ddvUtil.autoRetry(() => {
    return Promise.resolve()
      .then(() => {
        if (!this.ddvUtil.$store.state.isLogin) {
          return this.getLogin()
        }
      })
      .then(() => {
        if (typeof cb === 'function') {
          return cb()
        }
      })
  }, opts)
}

function isOpen () {
  return util.isFunction(this.openRun)
}

function open () {
  return new Promise((resolve, reject) => {
    this.openCb.push([resolve, reject])
    if (this.isOpen()) {
      this.openRun()
    } else {
      reject(new Error('打开登录窗口失败，稍后再试'))
    }
  })
}
// 登录成功
function getCb (index) {
  if (!Array.isArray(this.openCb)) {
    this.openCb = []
  }
  var cbs = this.openCb.splice(0, 1)
  cbs = cbs && cbs[0]
  return (cbs && util.isFunction(cbs[index])) ? cbs[index] : null
}
// 登录成功
function emitSuccess () {
  var resolve
  while ((resolve = getCb.call(this, 0))) {
    resolve()
  }
}
// 登录失败
function emitFail (e) {
  var reject
  e = e || new Error('登录失败')
  while ((reject = getCb.call(this, 1))) {
    reject(e)
  }
}
// 登录取消
function emitCancel (e) {
  var reject
  e = e || new Error('登录取消')
  while ((reject = getCb.call(this, 1))) {
    reject(e)
  }
}

function emitClose () {
  this.emitCancel()
}
