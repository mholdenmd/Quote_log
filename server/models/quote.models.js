const mongoose = require('mongoose');
 
const QuoteSchema = new mongoose.Schema({
    author: {
    type: String,
    require: [true, "Author name is required"]
    },
    quote: {
    type: String,
    require: [true, "Quote is required"]
    },
});
 
const Quote = mongoose.model('Quote', QuoteSchema);
 
module.exports = Quote;