import api from 'ddv-restful-api-wxmini'
import utilTime from 'ddv-util/time'
import utils from 'ddv-util'
import ddvUtil from '@/assets/ddv-util'

utils.extendInit(utilTime, api.util)
ddvUtil(utils)

export default utils
