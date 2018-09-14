import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import d from '@/plugins/ddv-util'
import i18n from '@/plugins/i18n'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MpvueRouterPatch)
Vue.filter('d', d)
Vue.prototype.$ddvUtil = d

const app = new Vue({
  store,
  i18n,
  ...App
})
app.$mount()
