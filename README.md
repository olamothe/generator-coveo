# generator-coveo

[![Build Status](https://travis-ci.org/olamothe/generator-coveo.svg?branch=master)](https://travis-ci.org/olamothe/generator-coveo) [![npm version](https://badge.fury.io/js/generator-coveo.svg)](https://badge.fury.io/js/generator-coveo)

> generator-coveo generating a nodejs module as development environment to interact with the Coveo Search UI framework


## Getting started

- Install: `npm install -g generator-coveo`
- Run: `yo coveo`


## Commands

* `yo coveo` shows a wizard for generating a new nodejs module specific for a customer

The generator will ask you a couple of questions, in order to be able to connect to your Coveo index and do queries. You will need to know your Coveo organization ID ( from the Coveo administration console, access the "Settings" menu in the top right, then Organization > Profile), as well as a valid API key with the requested privileges ( [API Keys - Page ](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=298) ) 

## What do you get?

Scaffolds out a working directory structure for you:

```
|-- <ProjectName>-coveo
    |-- package.json
    |-- tsconfig.json
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
    |-- views
        |-- index.ejs
        |-- partials
```
