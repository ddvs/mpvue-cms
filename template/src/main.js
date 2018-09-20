import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import ddvUtil from '@/plugins/ddv-util'
import i18n from '@/plugins/i18n'
import MpvueRouterPatch from 'mpvue-router-patch'
import dataMixins from '@/mixins/data-mixin.js'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MpvueRouterPatch)
Vue.prototype.$ddvUtil = ddvUtil
Vue.prototype.$store = store
Vue.mixin(dataMixins)

const app = new Vue({
  i18n,
  ...App
})
app.$mount()
