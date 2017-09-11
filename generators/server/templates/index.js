'use strict';
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const configYeoman = require('./.yo-rc.json')['generator-coveo'];
const ejs = require('ejs');
const fs = require('fs');
const fetch = require('node-fetch');

const configWebpack = require('./webpack.config.js');
const entryKeys = Object.keys(configWebpack.entry);
configWebpack.entry[entryKeys[0]].unshift('webpack-hot-middleware/client?reload=true');

const app = express();
const compiler = webpack(configWebpack);

app.set('view engine', 'ejs');

app.use(webpackDevMiddleware(compiler, {
    publicPath: configWebpack.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

const determineBody = () => {
    return Promise.resolve(fs.readFileSync('./views/partials/standard.body.ejs').toString());
}

const determineHeader = () => {
    if (configYeoman.typescript) {
        return Promise.resolve(ejs.render(fs.readFileSync('./views/partials/customization.header.ejs').toString(), configYeoman).toString());
    } else {
        return Promise.resolve(ejs.render(fs.readFileSync('./views/partials/standard.header.ejs').toString(), configYeoman).toString());
    }
}

const determineEndpointScript = () => {
    if (configYeoman.apikey) {
        if (configYeoman.searchtokenbody != null && configYeoman.searchtokenbody != '') {
            return generateSearchToken();
        } else {
            return Promise.resolve(ejs.render(fs.readFileSync('./views/partials/customization.endpointscript.ejs').toString(), configYeoman).toString());
        }
    } else {
        return Promise.resolve(ejs.render(fs.readFileSync('./views/partials/standard.endpointscript.ejs').toString(), configYeoman).toString());
    }
}

const generateSearchToken = () => {
    return fetch(`${configYeoman.coveoplatformurl}/rest/search/token`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${configYeoman.apikey}`,
            'Content-Type': `application/json; charset="UTF-8"`
        },
        body: JSON.stringify(configYeoman.searchtokenbody)
    })
        .then(res => res.json())
        .then(tokenRes => {
            const config = Object.assign({}, configYeoman, {
                apikey: tokenRes.token
            });
            return ejs.render(fs.readFileSync('./views/partials/customization.endpointscript.ejs').toString(), config).toString();
        })
}

app.use('/bin', express.static('bin'));

app.get('/', function (req, res) {
    Promise.all([determineBody(), determineHeader(), determineEndpointScript()]).then(values => {
        res.render('index', Object.assign({}, configYeoman, {
            body: values[0],
            header: values[1],
            endpointscript: values[2]
        }));
    });
});

app.listen(8080, () => {
    console.log('Listening on localhost:8080')
});


