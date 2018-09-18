import { mapState } from 'vuex'

export default {
  data () {
    return {
      ddv__$route: this.$route || {}
    }
  },
  computed: {
    ...mapState({
      ddv$store: state => state
    }),
    ddv$i18nLocale: {
      get () {
        return this.$i18n.locale
      },
      set (val) {
        this.$i18n.locale = val
      }
    },
    ddv$i18nMessages () {
      return this.$i18n.messages[this.ddv$i18nLocale]
    },
    ddv$route: {
      get () {
        return this.ddv__$route
      },
      set (val) {
        this.ddv__$route = val
      }
    }
  },
  onShow () {
    let currentPages = getCurrentPages()
    let lastPage = this.$ddvUtil.historyPages.length && this.$ddvUtil.historyPages[this.$ddvUtil.historyPages.length - 1]

    if (currentPages.length === 0 || (lastPage && lastPage[lastPage.length - 1].route === currentPages[currentPages.length - 1].route)) {
      return
    }
    this.$ddvUtil.historyPages.push(currentPages)
    this.$ddvUtil.historyPages.splice(0, this.$ddvUtil.historyPages.length - 5)
  },
  mounted () {
    this.ddv$route = { ...this.$route }
  }
}
