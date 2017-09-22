'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const _ = require('lodash');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const yosay = require('yosay');
const fetch = require('node-fetch');

const makeRepoName = (name) => {
    name = _.kebabCase(name);
    name = name.indexOf('-search-ui') > 0 ? name : name + '-search-ui';
    return name;
}

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
            choices: [
                'Using an anonymous API key to query public content inside your Coveo Index.',
                'Using an API key with the power to impersonate users to perform authenticated queries against your Coveo Index.',
                'Connect to a sample organization owned by Coveo for demo purposes'
            ]
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
            name: 'apikey',
            message: 'Please input your anonymous API key. Make sure it has the "Search : Execute queries" and "Analytics : Analytics Data (Edit)" privileges',
            when: (answers) => {
                if (answers.coveolink == 'Using an anonymous API key to query public content inside your Coveo Index.') {
                    return true;
                }
                return false;
            }
        }, {
            type: 'input',
            name: 'apikey',
            message: 'Please input your API Key that will allow you to generate search token. Make sure it has the "Search : Impersonate" privilege.',
            when: (answers) => {
                if (answers.coveolink == 'Using an API key with the power to impersonate users to perform authenticated queries against your Coveo Index.') {
                    return true;
                }
                return false;
            }
        }, {
            type: 'checkbox',
            name: 'projectType',
            message: 'Select the type of Coveo deployment',
            choices: ['Coveo for Salesforce', 'Local development']
        }];

        return this.prompt(prompts).then((answers) => {
            this.props = answers;
            this.props.identity = 'anonymous';
            if (this.props.coveolink == 'Using an API key with the power to impersonate users to perform authenticated queries against your Coveo Index.') {
                this.props.identity = 'impersonate';
            }
            if (this.props.coveolink == 'Connect to a sample organization owned by Coveo for demo purposes') {
                this.props.identity = 'sample';
            }
            // We don't need to save the "coveolink" answer. The identity will be enough.
            delete this.props.coveolink;

            if (this.props.projectType.length == 0) {
                this.props.local = true;
            }
            if (this.props.projectType.indexOf('Coveo for Salesforce') != -1) {
                this.props.salesforce = true;
            }
            if (this.props.projectType.indexOf('Local development') != -1) {
                this.props.local = true;
            }
            delete this.props.projectType;

            this.props.repoName = makeRepoName(this.props.project);
            this.props.projectSafeName = _.snakeCase(this.props.project);
            this.props.coveoplatformurl = 'https://platform.cloud.coveo.com';
            this.props.searchtokenbody = {
                "userIds": [
                    {
                        "name": "anonymous@coveo.com",
                        "provider": "Email Security Provider"
                    }
                ]
            };
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
    }

    writing() {
        this.config.set(this.props);

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

        if (this.props.local) {
            this.composeWith(
                require.resolve('../views'), {
                    baseProps: this.props
                }
            )
        }

        if (this.props.salesforce) {
            this.composeWith(
                require.resolve('../sfdc'), {
                    baseProps: this.props
                }
            )
        }

        this.composeWith(
            require.resolve('../server'), {
                baseProps: this.props
            }
        )
    }

    installing() {
        this.npmInstall();
    }

};