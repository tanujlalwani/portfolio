const marked = require('marked');
const renderer = new marked.Renderer();

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .options({
        headerIds: false,
        xhtml: true,
        breaks: true,
        renderer,
        gfm: true
      })
      .end();
  }
};
