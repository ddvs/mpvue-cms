import apiConfig from '@/api.config.js'

export default function moduleDdvApi (api) {
  apiConfig(api)

  api.setOnAccessKeyTrySum(3)
  api.setOnModelInitend(function (model) {
    model.headers({
      'x-ddv-from-host': 'test.com'
    })
  })
}
