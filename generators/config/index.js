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

    initializing() {
        this.props = {};
        this.props.project = this.options.project;
        this.props.projectSafeName = _.snakeCase(this.options.project);
    }

    writing() {
        const authorEmail = this.fs.readJSON(this.destinationPath('package.json')).author.email || 'platform@coveo.com';

        this.log('writing: ' + this.options.project);

        this.fs.copyTpl(
          this.templatePath('**'),
          this.destinationPath('config'), 
          { 
            projectSafeName : this.props.projectSafeName,
            capitalizeprojectSafeName : this.props.projectSafeName.replace(/\b\w/g, l => l.toUpperCase()),
            authorEmail : authorEmail
          }
        );
    }
}