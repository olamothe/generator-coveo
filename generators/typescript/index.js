'use strict';
const path = require('path');
const _ = require('lodash');
var mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');
const utils = require('../utils/utils');

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

    utils.determineEndpointScript(this.options.baseProps, require('path').resolve(__dirname + '/../views/templates/')).then(endpointScript => {
      this.fs.copyTpl(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js'),
        Object.assign({}, this.options.baseProps, { endpointscript: endpointScript })
      );
    });


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