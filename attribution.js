var fs = require('fs');
var Image = require('mapnik').Image;

var buffer = fs.readFileSync(__dirname + '/images/mapbox-osm-attribution.png');
var image = Image.fromBytesSync(buffer);
var attrWidth = image.width();
var attrHeight = image.height();

module.exports = function(width, height) {
  return {
    buffer: buffer,
    headers: {},
    x: width - attrWidth,
    y: height - attrHeight,
    reencode: true
  };
};
