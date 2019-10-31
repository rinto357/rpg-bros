const path = require('path');

exports.chainWebpack = function(chain) {
  // add an alias
  chain.resolve.alias.set('@comp',path.resolve(__dirname,'./components/'))
}
// alias does not work for components or layouts in theme folder, as relative paths are sufficient
