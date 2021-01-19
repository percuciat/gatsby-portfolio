const postcssPresetEnv = require(`postcss-preset-env`)
const auto = require(`autoprefixer`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
    auto({
      stage: 0,
    }),
  ],
})