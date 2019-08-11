const marked = require('marked');
const renderer = new marked.Renderer();

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

    config.module
      .rule('md')
      .test(/.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .options({
        xhtml: true,
        breaks: true,
        renderer,
        gfm: true
      })
      .end();
  }
};
