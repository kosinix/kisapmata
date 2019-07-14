# kisapmata
[![npm version](https://badge.fury.io/js/kisapmata.svg)](https://badge.fury.io/js/kisapmata)

*"o kay bilis naman maglaho"*

## Install

#### Choose 1 of 3 options:

Install from NPM:

    npm install kisapmata

Install latest from GitHub:

    npm install github:kosinix/kisapmata

Tied to a specific version/release from GitHub:

    npm install github:kosinix/kisapmata#1.1.0
    
## Quickstart

Include it:

    const flash = require('kisapmata');

In Express:

*Note: This assumes that you have registered the express-session middleware*

    const session = require('express-session');
    router.use(session());

In routes:

    router.post('/edit-profile', async (req, res, next) => {
        try {

            flash.set(req, 'success', 'Changes saved.') // Create flash message. Pass Express's req variable. Assign to key "success". Message is "Changes saved."

            res.redirect('/edit-profile')
        } catch (err) {
            next(err);
        }
    });

    router.get('/edit-profile', async (req, res, next) => {
        try {
            
            let okMessage = flash.get(req, 'success') // Get message with key 'success'
            res.render('edit-profile.html', {  
                okMessage: okMessage
            }) // Pass flash message to template
            
        } catch (err) {
            next(err);
        }
    });


## Advanced Usage

Its meant to be used with express sessions so the default path is `'session.flash.${id}'`. 

Change the path to something and use it outside express apps:

    flash.set(myCustomVariable, 'success', 'Changes saved.', 'path.custom.${id}') // Here ${id} becomes 'success'

    let x = flash.get(myCustomVariable, 'success', 'path.custom.${id}') // Make sure the path matches the one used in flash.set