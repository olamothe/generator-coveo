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
    return fs.readFileSync('./views/partials/standard.body.ejs');
}

const determineHeader = () => {
    if (configYeoman.typescript) {
        return ejs.render(fs.readFileSync('./views/partials/customization.header.ejs').toString(), configYeoman);
    }
}

const determineEndpointScript = () => {
    if (configYeoman.searchtokenbody != null && configYeoman.searchtokenbody != '') {
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
                return ejs.render(fs.readFileSync('./views/partials/endpointscript.ejs').toString(), Object.assign({}, configYeoman, {
                    apikey: tokenRes.token
                }));
            })
    } else {
        return Promise.resolve(ejs.render(fs.readFileSync('./views/partials/endpointscript.ejs').toString(), configYeoman))
    }
}

app.use('/bin', express.static('bin'));

app.get('/', function (req, res) {
    res.render('index', Object.assign({}, configYeoman, {
        body: determineBody(),
        header: determineHeader(),
        endpointscript: determineEndpointScript()
    }));
});

app.listen(8080, () => {
    console.log('Listening on localhost:8080')
})


