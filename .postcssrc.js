// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: edit .browserslistrc file under project root dir
    "autoprefixer": {
      "browsers": ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-pxtorem": {
      "rootValue": 16,
      "propList": ["*"]
    }
  }
}
