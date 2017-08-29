'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const _ = require('lodash');
const extend = require('deep-extend');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const yosay = require('yosay');
const utils = require('../../utils');

module.exports = class extends Generator {

    initializing() {
        this.props = {};
    }

    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the fabulous ' + chalk.red('Coveo Project') + ' generator!'
        ));

        const prompts = [{
            type: 'input',
            name: 'project',
            message: 'Your project name?',
            default: path.basename(process.cwd())
        }, {
            type: 'list',
            name: 'projecttype',
            message: 'Your project type?',
            choices: ['Salesforce', 'Coveo hosted search pages', 'Local only']
        }, {
            type: 'confirm',
            name: 'typescript',
            message: 'Do you want to generate the code for a custom component built with TypeScript using Webpack ?'
        }];

        return this.prompt(prompts).then(function (props) {
            this.props = props;
            this.props.repoName = utils.makeRepoName(this.props.project);
            this.props.projectSafeName = _.snakeCase(this.props.project);
        }.bind(this));

    }

    default() {
        if (path.basename(this.destinationPath()) !== this.props.repoName) {
            this.log(
                'You must be inside a folder named ' + this.props.repoName + '\n' +
                'I\'ll automatically create this folder.'
            );
            mkdirp(this.props.repoName);
            this.destinationRoot(this.destinationPath(this.props.repoName));
        }

        /*this.composeWith(require.resolve('../config'), {
            project: this.props.project
        });

        

        this.composeWith(require.resolve('../sass'), {
            project: this.props.project
        });

        this.composeWith(require.resolve('../routes'), {
            project: this.props.project
        });

        this.composeWith(require.resolve('../vendor'), {
            project: this.props.project
        });

        this.composeWith(require.resolve('../views'), {
            project: this.props.project
        });

        this.composeWith(require.resolve('../sfdc'), {
            project: this.props.project
        });*/
    }

    writing() {
        const templateObj = {
            projectSafeName: this.props.projectSafeName,
            capitalizeProjectSafeName: this.props.projectSafeName.replace(/\b\w/g, l => l.toUpperCase())
        }

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            templateObj
        );

        this.fs.copyTpl(
            this.templatePath('README.MD'),
            this.destinationPath('README.MD'),
            templateObj
        );

        if (this.props.typescript) {
            this.composeWith(
                require.resolve('../typescript'), {
                    baseProps: this.props
                }
            );
        }

        this.composeWith(
            require.resolve('../pages'), {
                baseProps: this.props
            }
        )

    }

    installing() {
        this.npmInstall(null, null, () => {
            if (this.props.typescript) {
                this.spawnCommandSync(this.destinationPath('node_modules/webpack/bin/webpack.js'));
            }
        });

    }

};