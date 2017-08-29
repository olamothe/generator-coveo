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
        if (this.options.baseProps.typescript) {
            this.fs.copyTpl(
                this.templatePath('customization.html'),
                this.destinationPath('pages/index.html'),
                this.options.baseProps
            )
        } else {
            this.fs.copyTpl(
                this.templatePath('standard.html'),
                this.destinationPath('pages/index.html'),
                this.options.baseProps
            )
        }
    }
}