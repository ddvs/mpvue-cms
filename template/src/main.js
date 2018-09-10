import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import d from '@/plugins/ddv-util'
import i18n from '@/plugins/i18n'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.store = store
App.i18n = i18n
App.mpType = 'app'

Vue.use(MpvueRouterPatch)
Vue.filter('d', d)
Vue.prototype.$ddvUtil = d

const app = new Vue(App)
app.$mount()
