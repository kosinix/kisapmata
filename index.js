//// Core modules

//// External modules
let lodashGet = require('lodash.get');
let lodashSet = require('lodash.set');


let flashSet = (req, id, message) => {
    lodashSet(req, 'session.flash.' + id, message);
}
let flash = {
    set: flashSet,
    get: (req, id) => {
        let r = lodashGet(req, 'session.flash.' + id, '');
        lodashSet(req, 'session.flash.' + id, '');
        return r;
    },
    error: (req, id, message) => {
        flashSet(req, `${id}.error`, message)
    },
    ok: (req, id, message) => {
        flashSet(req, `${id}.ok`, message)
    },
    warning: (req, id, message) => {
        flashSet(req, `${id}.warning`, message)
    },
    info: (req, id, message) => {
        flashSet(req, `${id}.info`, message)
    }
}
// Export
module.exports = flash;
