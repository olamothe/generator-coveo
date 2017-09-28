'use strict';
const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const ejs = require('ejs');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

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

const watchAndReload = (eventType, filename, timeout) => {
    const invalidate = () => {
        middleware.invalidate(stats => {
            hotmiddleware.publish(Object.assign({}, stats.toJson(), { action: 'sync', hash: stats.toJson().hash + '0' }));
        });
    }
    if (eventType == 'change') {
        if (timeout) {
            setTimeout(invalidate, timeout);
        } else {
            invalidate();
        }
    }
}

const watch = (pathToWatch, timeout) => {
    const standardPathToWatch = path.resolve(pathToWatch);
    if (fs.existsSync(standardPathToWatch)) {
        fs.watch(standardPathToWatch, (eventType, filename) => {
            watchAndReload(eventType, filename, timeout);
        })
    }
}

watch('pages');
watch('pages/sfdc');
fs.watch('.yo-rc.json', () => {
    setTimeout(() => {
        configYeoman = JSON.parse(fs.readFileSync('.yo-rc.json'))['generator-coveo'];
        watchAndReload('change');
    }, 1000);
})


app.use(middleware);
app.use(hotmiddleware);
app.use(express.static('staticresources'));
app.use(express.static('pages'));

app.use('/sfdc', (req, res) => {

    const allCompilationAssets = res.locals.webpackStats.compilation.assets;
    const requested = req.path.replace('/', '');
    if (allCompilationAssets[`${requested}.html`]) {
        const $ = cheerio.load(allCompilationAssets[`${requested}.html`].source());

        if (fs.existsSync(`pages/sfdc/${requested}.component`)) {
            $('body').append(fs.readFileSync(`pages/sfdc/${requested}.component`).toString().replace('<apex:component>', '').replace('</apex:component>', ''));
            res.send($.html());
        } else {
            $('body').append(`<p>Coveo Search page does not exist.<br/>Please create a file named <strong>${requested}.component</strong> in the ./pages/sfdc directory.</p>`)
            res.send($.html());
        }

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