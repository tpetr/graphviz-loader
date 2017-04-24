var Viz = require('viz.js');
var path = require('path');

module.exports = function (content) {
  var match = content.match(new RegExp('graph\\s+"?(.*?)"?\\s+\\{'));

  var header = match ? match[1]
                     : path.basename(this.resource, '.dot');

  var svg = Viz(content, { format: "svg" })
    .replace(/<svg width="\d+pt"/, '<svg width="100%"');  // ugh

  return '<h1>' + header + '</h1>' + svg;
}
