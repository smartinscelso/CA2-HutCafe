/*
* This creates a database schema for menu Items
* author @celsoM
*/

const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    item: String,
    description: String,
    price: int
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', MenuSchema);