//// Core modules

//// External modules
let lodashGet = require('lodash.get');
let lodashSet = require('lodash.set');


let flash = {
    set: (req, id, message) => {
        lodashSet(req, 'session.flash.' + id, message);
    },
    get: (req, id) => {
        let r = lodashGet(req, 'session.flash.' + id, '');
        lodashSet(req, 'session.flash.' + id, '');
        return r;
    }
}

// Export
module.exports = flash;

