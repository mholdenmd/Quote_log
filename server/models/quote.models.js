const mongoose = require('mongoose');
 
const QuoteSchema = new mongoose.Schema({
    author_name: {
    type: String,
    require: [true, "Author name is required"],
    // minlength: [2, "Author name must be more than 2 characters"]
    },
    quote: {
    type: String,
    require: [true, "Quote is required"]
    },
    quoteOn: {
        type: Date,
        require: [true, "Date is required"]
        },
});
 
const Quote = mongoose.model("Quote", QuoteSchema);
 
module.exports = Quote;