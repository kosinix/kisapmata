//// Core modules

//// External modules
let lodashGet = require('lodash.get');
let lodashSet = require('lodash.set');


let flash = {
    set: (req, id, message, path = 'session.flash.${id}') => {
        lodashSet(req, path.replace('${id}', id), message);
    },
    get: (req, id, path = 'session.flash.${id}') => {
        path = path.replace('${id}', id)
        let r = lodashGet(req, path, '');
        lodashSet(req, path, '');
        return r;
    }
}

// Export
module.exports = flash;

