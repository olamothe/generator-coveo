'use strict';
const path = require('path');
const _ = require('lodash');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    writing() {

        this.fs.copyTpl(
            this.templatePath('**'),
            this.destinationPath('sass'),
            this.options.baseProps
        );

    }
}