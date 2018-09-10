module.exports = {
  'helpers': {
    'if_or': function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    }
  },
  'prompts': {
    'name': {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    'appid': {
      'type': 'string',
      'required': false,
      'message': 'wxmp appid',
      'default': 'touristappid'
    },
    'description': {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'A Mpvue project'
    },
    'author': {
      'type': 'string',
      'message': 'Author'
    },
    'test': {
      'value': false,
      'message': '小程序测试，敬请关注最新微信开发者工具的“测试报告”功能'
    }
  },
  'completeMessage': 'To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at http://mpvue.com'
}
