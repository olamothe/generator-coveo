const ejs = require('ejs');
const fs = require('fs');

const determineBody = (baseProps, tmplPath) => {
  return Promise.resolve(ejs.render(fs.readFileSync(`${tmplPath}/partials/standard.body.ejs`).toString(), baseProps).toString());
}

const determineHeader = (baseProps, tmplPath) => {
  return Promise.resolve(ejs.render(fs.readFileSync(`${tmplPath}/partials/customization.header.ejs`).toString(), baseProps).toString());
}

const determineEndpointScript = (baseProps, tmplPath) => {
  if (baseProps.apikey) {
    return Promise.resolve(ejs.render(fs.readFileSync(`${tmplPath}/partials/customization.endpointscript.ejs`).toString(), baseProps).toString());
  } else {
    return Promise.resolve(ejs.render(fs.readFileSync(`${tmplPath}/partials/standard.endpointscript.ejs`).toString(), baseProps).toString());
  }
}

module.exports = {
  determineBody: determineBody,
  determineHeader: determineHeader,
  determineEndpointScript: determineEndpointScript
}