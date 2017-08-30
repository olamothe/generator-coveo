'use strict';
/**
 * copy all relevant files from node_modules/coveo-search-ui to bin/vendor/coveo
 */

const fs = require('fs');
const ncp = require('ncp').ncp;

if (!fs.existsSync('./bin')) {
  fs.mkdirSync('./bin');
}

if (!fs.existsSync('./bin/vendor')) {
  fs.mkdirSync('./bin/vendor');
}

if (!fs.existsSync('./bin/vendor/coveo')) {
  fs.mkdirSync('./bin/vendor/coveo');
}

ncp('./node_modules/coveo-search-ui/bin', './bin/vendor/coveo', {
  clobber: true
}, (err) => {
  if (err) {
    throw (err)
  }
});