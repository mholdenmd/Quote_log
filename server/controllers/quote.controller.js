const Quote = require('../models/quote.models')

module.exports.findAllQuotes = (req, res) => {
    Quote.find()
    .then(allQuotes => {
        console.log("Looking for Quotes")
        res.json({results: allQuotes})
    })
    .catch(err => res.json(err))
}

module.exports.createOneQuote = (req, res) => {
    Quote.create(req.body)
        .then(newQuote => {
            console.log("Creating a thing")
            res.json({results: newQuote})
        })
        .catch(err => res.json(err))
}

module.exports.findAQuote = (req, res) => {
    Quote.findOne({_id: req.params.quoteId})
        .then(oneQuote => {
            console.log("looking for that one thing")
            res.json({results: oneQuote})
        })
        .catch(err => res.json(err))
}

module.exports.updateAQuote = (req, res) => {
    Quote.findOneAndUpdate({_id: req.params.quoteId},
        req.body,
        {new: true})
        .then(updatedQuote => res.json({results: updatedQuote}))
        .catch(err => res.json({errors: err}))
}

module.exports.deleteQuote = (req, res) => {
    Quote.deleteOne({_id: req.params.quoteId})
        .then(deletedResult => res.json ({results: deletedResult}))
        .catch(err => res.json({errors: err}))
}