import {
  mapState
} from 'vuex'

export default {
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
    ddv$route () {
      return this.$route
    }
  }
}
