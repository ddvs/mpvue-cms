import moduleAutoRetry from '@/assets/ddv-util/module.autoRetry.js'
import moduleDdvApi from '@/assets/ddv-util/module.ddvApi.js'
import moduleLoginBox from '@/assets/ddv-util/module.loginBox.js'

export default function (ddvUtil) {
  moduleDdvApi(ddvUtil.api)
  moduleAutoRetry(ddvUtil)
  moduleLoginBox(ddvUtil)

  ddvUtil.historyPages = []
  ddvUtil.inject = function () {}
}
