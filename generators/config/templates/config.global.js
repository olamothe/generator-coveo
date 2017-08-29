var config = module.exports = {};
const minimize = process.argv.indexOf('--minimize') !== -1;
const path = require('path');

config.env = 'development';
config.enableImpersonateUser = false;
config.hostname = 'dev.example.com';
config.server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
config.server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

config.iow_path = '';

// coveo
config.coveo = {};
config.coveo.rest_uri = 'https://platform.cloud.coveo.com/rest/search';
config.coveo.cloud_platform_host = 'platform.cloud.coveo.com';
config.coveo.cloud_platform_uri = 'https://cloudplatform.coveo.com/rest';
config.coveo.ops_identity = { 'name': '<%= authorEmail %>', 'provider': 'Email Security Provider' };
config.coveo.filter = '';

// custom
config.<%= projectSafeName %> = {};
config.<%= projectSafeName %>.webpack_config = {};

// webpack config for support bundle -- PHASE 1
config.<%= projectSafeName %>.webpack_config.support = {
    entry: ['./src/Index.ts'],
    output: {
        path: path.resolve('./bin/js'),
        filename: minimize ? 'Coveo.<%= capitalizeprojectSafeName %>.min.js' : 'Coveo.<%= capitalizeprojectSafeName %>.js',
        libraryTarget: 'umd',
        library: 'CoveoExtension',
        publicPath: '/js/'
    }
};


// Sample 
// webpack config for customer bundle -- PHASE 2
// config.<%= projectSafeName %>.webpack_config.customer = {
//     entry: ['./src/Index.ts'],
//     output: {
//         path: path.resolve('./bin/js'),
//         filename: minimize ? 'Coveo.<%= capitalizeprojectSafeName %>.Customer.min.js' : 'Coveo.<%= capitalizeprojectSafeName %>.Customer.js',
//         libraryTarget: 'umd',
//         library: 'CoveoExtension',
//         publicPath: '/js/'
//     }
// };

// Sample
// webpack config for internal bundle -- PHASE 3
// config.<%= projectSafeName %>.webpack_config.internal = {
//     entry: ['./src/Index.ts'],
//     output: {
//         path: path.resolve('./bin/js'),
//         filename: minimize ? 'Coveo.<%= capitalizeprojectSafeName %>.Internal.min.js' : 'Coveo.<%= capitalizeprojectSafeName %>.Internal.js',
//         libraryTarget: 'umd',
//         library: 'CoveoExtension',
//         publicPath: '/js/'
//     }
// };