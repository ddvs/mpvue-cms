import moduleAutoRetry from '@/assets/ddv-util/module.autoRetry.js'
import moduleDdvApi from '@/assets/ddv-util/module.ddvApi.js'
import moduleLoginBox from '@/assets/ddv-util/module.loginBox.js'

export default function (ddvutil) {
  moduleDdvApi(ddvutil.api)
  moduleAutoRetry(ddvutil)
  moduleLoginBox(ddvutil)

  ddvutil.inject = function () {}
}
