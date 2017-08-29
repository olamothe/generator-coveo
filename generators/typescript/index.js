'use strict';
const path = require('path');
const _ = require('lodash');
var mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('project', {
      type: String,
      required: true,
      desc: 'Project name'
    });
  }

  initializing() {
    this.props = {};
    this.props.project = this.options.project;
    this.props.projectSafeName = _.snakeCase(this.options.project);
    this.props.capitalizeprojectSafeName = this.props.projectSafeName.replace(/\b\w/g, l => l.toUpperCase());
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('tslint.json'),
      this.destinationPath('tslint.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src/ui/HelloWorld.ts'),
      this.destinationPath('src/ui/HelloWorld.ts'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('src/Index.ts'),
      this.destinationPath('src/Index.ts'),
      this.props
    );

  }
}