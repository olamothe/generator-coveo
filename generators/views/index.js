'use strict';
const path = require('path');
const _ = require('lodash');
const Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    writing() {
        this.fs.copy(this.templatePath('**'), this.destinationPath('views'));
    }
}