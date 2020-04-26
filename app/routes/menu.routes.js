/*
 This file sets up routes for HTTP methods GET, POST, DELETe and UPDATE
 Author: @celsoM 
*/  
    
    module.exports = (app) => {
    const items = require('../controllers/menu.controller.js');
    // Create a new items
    app.post('/items', items.create);
    // Retrieve all items
    app.get('/items', items.findAll);
    // Retrieve a single Item with itemId
    app.get('/items/:itemId', items.findOne);
    // Update a Item with itemId
    app.put('/items/:itemId', items.update);
    // Delete a Item with noteId
    app.delete('/items/:itemId', items.delete);
}