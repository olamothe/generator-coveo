# generator-coveo

![npm version](https://badge.fury.io/js/generator-coveo.svg)](https://badge.fury.io/js/generator-coveo)

> Generates a working project to develop with Coveo.


## Getting started

- Install: `npm install -g generator-coveo`
- Run: `yo coveo`


## Instructions

The generator will ask you a couple of questions, in order to be able to connect to your Coveo index and do queries. You will need to know your Coveo organization ID ( from the Coveo administration console, access the "Settings" menu in the top right, then Organization > Profile), as well as a valid API key with the requested privileges ( [API Keys - Page ](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=298) ).

The generated project is designed to work in tandem with a [Visual Studio Code plugin](https://github.com/coveo/coveo-code).

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
