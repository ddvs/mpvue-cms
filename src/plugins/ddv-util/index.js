import api from 'ddv-restful-api-wxmini'
import utilTime from 'ddv-util/time'
import d from 'ddv-util'
import ddvUtil from '@/assets/ddv-util'

d.extendInit(utilTime, api.util)
ddvUtil(d)

export default d
