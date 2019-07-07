//// Core modules

//// External modules
let lodash = require('lodash');

let flash = {
    set: (req, id, message, path = `session.flash.${id}`) => {
        lodash.set(req, path, message);
    },
    get: (req, id, path = `session.flash.${id}`) => {
        let r = lodash.get(req, path, '');
        lodash.set(req, path, ''); // Erase content
        return r;
    }
}

// Export
module.exports = flash;

