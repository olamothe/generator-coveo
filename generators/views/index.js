'use strict';
const Generator = require('yeoman-generator');
const ejs = require('ejs');
const fs = require('fs');
const mkdirp = require('mkdirp');
const utils = require('../utils/utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    writing() {
        Promise.all([
            utils.determineHeader(this.options.baseProps, this.templatePath()),
            utils.determineBody(Object.assign({}, this.options.baseProps, { root: 'body' }), this.templatePath()),
            utils.determineEndpointScript(this.options.baseProps, this.templatePath())
        ]).then(values => {
            ejs.renderFile(this.templatePath('index.ejs'), Object.assign({}, this.options.baseProps, {
                header: values[0],
                body: values[1],
                endpointscript: values[2]
            }), (err, rendered) => {
                mkdirp(this.destinationPath('pages'));
                fs.writeFile(this.destinationPath('pages/index.html'), rendered);
            });
        });
    }
}