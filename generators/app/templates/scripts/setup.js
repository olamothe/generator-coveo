'use strict';
/**
 * copy all relevant files from node_modules/coveo-search-ui to bin/vendor/coveo
 */

const fs = require('fs');
const ncp = require('ncp').ncp;

if (!fs.existsSync('./staticresources')) {
  fs.mkdirSync('./staticresources');
}

if (!fs.existsSync('./staticresources/vendor')) {
  fs.mkdirSync('./staticresources/vendor');
}

if (!fs.existsSync('./staticresources/vendor/coveo')) {
  fs.mkdirSync('./staticresources/vendor/coveo');
}

ncp('./node_modules/coveo-search-ui/bin', './staticresources/vendor/coveo', {
  clobber: true
}, (err) => {
  if (err) {
    throw (err)
  }
});