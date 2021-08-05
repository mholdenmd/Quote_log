const Quote = require('../models/quote.models')

module.exports.findAllQuotes = (req, res) => {
    Quote.find()
    .then(allquotes => {
        console.log("Looking for Quotes")
        res.json({results: allquotes})
    })
    .catch(err => res.json(err))
}