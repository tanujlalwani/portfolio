module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      // '@' is an alias for 'src'
      .set('@components', '@/components')
      .set('@views', '@/views')
      .set('@assets', '@/assets')
      .set('@posts', '@/assets/posts')
      .set('@scss', '@/assets/scss');

    config.module
      .rule('md')
      .test(/.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('showdown-markdown-loader')
      .loader('showdown-markdown-loader')
      .options({
        extensions: ['vimeo']
      })
      .end();

    config.module
      .rule('image')
      .test(/.(png | jpe?g | gif | svg)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[hash].[name].[ext]'
      })
      .end();
    // .use('image-loader')
    // .loader('image-webpack-loader')
    // .end();
  }
};
