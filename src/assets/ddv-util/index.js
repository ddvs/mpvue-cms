import moduleAutoRetry from '@/assets/ddv-util/module.autoRetry.js'
import moduleDdvApi from '@/assets/ddv-util/module.ddvApi.js'

export default function (ddvutil) {
  moduleDdvApi(ddvutil.api)
  moduleAutoRetry(ddvutil)
}
