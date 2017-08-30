'use strict';
const path = require('path');
const _ = require('lodash');
var mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json'),
      this.options.baseProps
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      this.options.baseProps
    );

    this.fs.copyTpl(
      this.templatePath('tslint.json'),
      this.destinationPath('tslint.json'),
      this.options.baseProps
    );

    this.fs.copyTpl(
      this.templatePath('src/ui/HelloWorld.ts'),
      this.destinationPath('src/ui/HelloWorld.ts'),
      this.options.baseProps
    );

    this.fs.copyTpl(
      this.templatePath('src/Index.ts'),
      this.destinationPath('src/Index.ts'),
      this.options.baseProps
    );

  }
}