module.exports = {
  map: true,
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'),
    require('postcss-normalize')
  ]
}