import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'
import api from 'ddv-restful-api-wxmini'
import utilTime from 'ddv-util/time'
import d from 'ddv-util'

Vue.config.productionTip = false
Vue.prototype.d = d
App.store = store
App.mpType = 'app'

api.setBaseUrl('https://api.test.com/')
api.setOnAccessKeyTrySum(3)
api.setOnModelInitend(function (model) {
  model.headers({
    'x-ddv-from-host': 'test.com'
  })
})

Vue.use(MpvueRouterPatch)
Vue.filter('d', d)
d.extendInit(utilTime, api.util)
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
