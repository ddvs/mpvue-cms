// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-mpvue-wxss": {},
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
    })
  }
}
