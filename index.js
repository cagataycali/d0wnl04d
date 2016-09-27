var fs = require('fs');
var request = require('request');
var async = require('async');
var colors = require('colors');

var download = function(uri, filename, callback, err) {
  request.head(uri, function (err, res, body) {
    // console.log(colors.gray('content-type:', res.headers['content-type']));
    // console.log(colors.gray('content-length:', res.headers['content-length']));
    if (err) {
      error(err)
    }
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = function(obj) {
  return new Promise(function(resolve, reject) {
    download(obj.url, obj.name, function () {
      resolve(obj.name);
    }, function(error) {
      reject(err);
    });
  });
}
