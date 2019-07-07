# kisapmata
*"o kay bilis naman maglaho ng"*

## Install

    npm install github:kosinix/kisapmata

Tied to a specific version/release

    npm install github:kosinix/kisapmata#1.0.0
    
## Quickstart

    const flash = require('kisapmata');

In express

    router.post('/edit-profile', async (req, res, next) => {
        try {

            flash.set(req, 'success', 'Changes saved.') // Create flash message
            res.redirect('/edit-profile')
        } catch (err) {
            next(err);
        }
    });

    router.get('/edit-profile', async (req, res, next) => {
        try {
            
            let okMessage = flash.get(req, 'success')
            res.render('edit-profile.html', {  
                okMessage: okMessage
            }) // Show flash message
            
        } catch (err) {
            next(err);
        }
    });


## Advanced Usage

Change the path to something and use it outside express apps

    flash.set(myCustomVariable, 'success', 'Changes saved.', 'path.custom.${id}') // Here ${id} becomes 'success'

    let x = flash.get(myCustomVariable, 'success', 'path.custom.${id}')