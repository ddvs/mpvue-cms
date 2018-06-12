// https://github.com/michael-ciniawsky/postcss-load-config
const replaceTagSelectorMap = require('postcss-mpvue-wxss/lib/wxmlTagMap')

module.exports = {
  "plugins": {
    "postcss-mpvue-wxss": {
      cleanSelector: ['*'],
      remToRpx: 100,
      replaceTagSelector: Object.assign(replaceTagSelectorMap, {
        // 将覆盖前面的 * 选择器被清理规则
        '*': 'view, text'
      })
    },
    "postcss-salad": require('postcss-salad')({
      browsers: ['last 3 versions'],
      features: {
        autoprefixer: false,
        bem: {
          shortcuts: {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e',
            'utility': 'util',
            'component-namespace': 'n'
          },
          separators: {
            descendent: '__',
            modifier: '--'
          }
        }
      }
    }),
    "postcss-nested": {},
    "postcss-flexible": require('postcss-flexible')({
      remUnit: 75
    })
  }
}
