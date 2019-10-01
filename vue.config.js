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
      .end();

    config.module
      .rule('image')
      .test(/.(png | jpe?g | gif | svg | webm)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[path][name].[ext]'
      })
      .end();
    // .use('image-loader')
    // .loader('image-webpack-loader')
    // .end();

    config.module
      .rule('media')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // modify the options...
        options = {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[ext]'
            }
          }
        };
        return options;
      });

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // modify the options...
        options = {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[ext]'
            }
          }
        };
        return options;
      });
  }
};
