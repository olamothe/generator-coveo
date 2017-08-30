'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const _ = require('lodash');
const extend = require('deep-extend');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const yosay = require('yosay');
const utils = require('../../utils');
const fetch = require('node-fetch');

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
        }, {
            type: 'confirm',
            name: 'sass',
            message: 'Do you want to generate the boilerplate to use sass to act as a preprocessor for your style sheets (CSS) ?'
        }, {
            type: 'list',
            name: 'coveolink',
            message: 'How do you want to connect to your Coveo Organization ?',
            choices: ['Using an anonymous API key to query public content inside your Coveo Index.', 'Using an API key with the power to impersonate users to perform authenticated queries against your Coveo Index.', 'Connect to a sample organization owned by Coveo for demo purposes']
        }, {
            type: 'input',
            name: 'coveoorganizationid',
            message: 'Please input your Coveo Organization ID. This needs to be the API name of your organization, not the display name.',
            when: (answers) => {
                if (answers.coveolink == 'Connect to a sample organization owned by Coveo for demo purposes') {
                    return false;
                }
                return true;
            }
        }, {
            type: 'input',
            name: 'anonymousapikey',
            message: 'Please insert your anonymous API key. Make sure it has the "Execute query" privilege.',
            when: (answers) => {
                if (answers.coveolink == 'Using an anonymous API key to query public content inside your Coveo Index.') {
                    return true;
                }
                return false;
            }
        }];

        return this.prompt(prompts).then((answers) => {
            this.props = answers;
            this.props.repoName = utils.makeRepoName(this.props.project);
            this.props.projectSafeName = _.snakeCase(this.props.project);

            return this.prompt({
                type: 'list',
                name: 'coveolink',
                message: 'How do you want to connect to your Coveo Organization ?',
                choices: ['Using an anonymous API key to query public content inside your Coveo Index.', 'Using an API key with the power to impersonate users to perform authenticated queries against your Coveo Index.', 'Connect to a sample organization owned by Coveo for demo purposes']
            }).then((connectionChoice) => {
                this.props.connectionChoice = connectionChoice;
                if (connectionChoice == 'Using an anonymous API key to query public content inside your Coveo Index.') {
                    return promptForAnonymousApiKey(this);
                }
            })
        });
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
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('README.MD'),
            this.destinationPath('README.MD'),
            this.props
        );

        this.fs.copy(
            this.templatePath('scripts/**'),
            this.destinationPath('scripts/'),
            this.props
        );

        if (this.props.sass) {
            this.composeWith(
                require.resolve('../sass'), {
                    baseProps: this.props
                }
            )
        }

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
        this.npmInstall();
    }

};