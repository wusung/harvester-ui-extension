const config = require('@rancher/shell/pkg/vue.config')(__dirname);
const path = require('path');

module.exports = {
  ...config,
  configureWebpack: (webpackConfig) => {
    if (typeof config.configureWebpack === 'function') {
      config.configureWebpack(webpackConfig);
    }

    // Ensure drawer imports are available in library builds.
    webpackConfig.resolve = webpackConfig.resolve || {};
    webpackConfig.resolve.alias = webpackConfig.resolve.alias || {};
    webpackConfig.resolve.alias['@shell/utils/dynamic-importer'] = path.join(__dirname, 'dynamic-importer.js');
  }
};
