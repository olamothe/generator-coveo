'use strict';
const path = require('path');
const _ = require('lodash');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('customer', {
            type: String,
            required: true,
            desc: 'Customer name'
        });
    }

    writing() {

        this.fs.copyTpl(
            this.templatePath('**'),
            this.destinationPath(''),
            this.options.baseProps
        );

    }
}