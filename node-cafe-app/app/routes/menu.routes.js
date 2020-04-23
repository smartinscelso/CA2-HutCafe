/*
 This file sets up routes for HTTP methods GET, POST, DELETe and UPDATE
 Author: @celsoM 
*/  
    
    module.exports = (app) => {
    const items = require('../controllers/menu.controller.js');
    // Create a new items
    app.post('/items', items.create);
    // Retrieve all Notes
    app.get('/items', items.findAll);
    // Retrieve a single Note with noteId
    app.get('/notes/:itemId', items.findOne);
    // Update a Note with noteId
    app.put('/items/:itemId', items.update);
    // Delete a Note with noteId
    app.delete('/items/:itemId', items.delete);
}