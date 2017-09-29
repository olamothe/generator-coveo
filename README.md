# generator-coveo

![npm version](https://badge.fury.io/js/generator-coveo.svg)(https://badge.fury.io/js/generator-coveo)

> Generates a working project to develop with Coveo.


## Getting started

- Install: `npm install -g generator-coveo`
- Run: `yo coveo`


## Instructions

The generator will ask you a couple of questions, in order to be able to connect to your Coveo index and do queries. You will need to know your Coveo organization ID ( from the Coveo administration console, access the "Settings" menu in the top right, then Organization > Profile), as well as a valid API key with the requested privileges ( [API Keys - Page ](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=298) ).

## Visual studio code plugin

This generator will create a working project that is meant to be used in tandem with [a Visual Studio code plugin](https://github.com/coveo/coveo-code) developed by Coveo to provide autocompletion in HTML plages containing Coveo components, as well as facilitating uploading the needed resources to different platform(s) (eg: Salesforce).

## What do you get?

Scaffolds out a working directory structure for you:

```
|-- <ProjectName>-coveo
    |-- package.json
    |-- tsconfig.json
    |-- tslint.json
    |-- webpack.config.js
    |-- tslint.json
    |-- .yo-rc.json
    |-- sass
    |   |-- Index.scss
    |   |-- HelloWorld.scss
    |-- src
    |   |-- Index.ts
    |   |-- ui
    |   |   |-- HelloWorld.ts
    |-- pages
        |-- index.html
        |-- sfdc
            |-- community.page
            |-- community.component
```
