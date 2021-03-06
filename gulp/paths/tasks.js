'use strict';

var fs = require('fs');
var path = require('path');

var getFiles = function (dir, files_){
    
  files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};
var files = getFiles('./gulp/tasks');

module.exports = files;

/*
module.exports = [
  './gulp/tasks/sass.js',
  './gulp/tasks/serve.js',
  './gulp/tasks/pug.js',
  './gulp/tasks/watch.js',
  './gulp/tasks/watch.debug.js',
  './gulp/tasks/clean.js',
  './gulp/tasks/js.foundation.js',
  './gulp/tasks/css.foundation.js',
  './gulp/tasks/js.process.js',
  './gulp/tasks/js.process.debug.js',
  './gulp/tasks/js.lint.js',
  './gulp/tasks/copy.image.js',
  './gulp/tasks/sprite.svg.js',
  './gulp/tasks/sprite.image.js',
  './gulp/tasks/copy.fonts.js',
  './gulp/tasks/copy.favicon.js',
  './gulp/tasks/copy.webglwater.js',
  './gulp/tasks/upload.ftp.js'
];

*/