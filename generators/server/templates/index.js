'use strict';
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const ejs = require('ejs');
const fetch = require('node-fetch');
const $ = require('cheerio');

const configWebpack = require('./webpack.config.js');
const entryKeys = Object.keys(configWebpack.entry);
configWebpack.entry[entryKeys[0]].unshift('webpack-hot-middleware/client?reload=true');

let configYeoman = JSON.parse(fs.readFileSync('.yo-rc.json'))['generator-coveo'];

const app = express();
const compiler = webpack(configWebpack);

const middleware = webpackDevMiddleware(compiler, {
    publicPath: configWebpack.output.publicPath,
    serverSideRender: true
});

const hotmiddleware = webpackHotMiddleware(compiler);

app.use(middleware);
app.use(hotmiddleware);

const generateSearchToken = () => {
    return fetch(`${configYeoman.coveoplatformurl}/rest/search/token`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${configYeoman.apikey}`,
            'Content-Type': `application/json; charset="UTF-8"`
        },
        body: JSON.stringify(configYeoman.searchtokenbody)
    }).then(res => res.json())
}

app.use(express.static('bin'));
app.use(express.static('pages'));

const watchAndReload = (eventType, filename) => {
    if (eventType == 'change') {
        console.log(filename);
        middleware.invalidate(stats => {
            hotmiddleware.publish(Object.assign({}, stats.toJson(), { action: 'sync', hash: stats.toJson().hash + '0' }));
        });
    }
}

fs.watch('pages', (eventType, filename) => {
    watchAndReload(eventType, filename);
});

fs.watch('.yo-rc.json', (eventType, filename) => {
    configYeoman = JSON.parse(fs.readFileSync('.yo-rc.json'))['generator-coveo'];
    console.log(configYeoman.coveoplatformurl);
    watchAndReload(eventType, filename);
})

app.use('/sfdc', (req, res) => {

    const allCompilationAssets = res.locals.webpackStats.compilation.assets;
    const requested = req.path.replace('/', '');
    if (allCompilationAssets[`${requested}.html`]) {
        res.send(allCompilationAssets[`${requested}.html`].source());
    } else {
        res.status(404).send('Not found!');
    }

});


app.get('/token', (req, res) => {
    if (configYeoman.apikey) {
        if (configYeoman.identity == 'anonymous') {
            res.send({ token: configYeoman.apikey });
        } else {
            generateSearchToken()
                .then(resToken => res.send(resToken))
                .catch(err => res.send({
                    'error': err
                }));
        }
    } else {
        res.send({
            'error': 'No API key in configuration'
        })
    }
})

app.listen(8080, () => {
    console.log('Listening on localhost:8080')
});