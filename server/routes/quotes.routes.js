const QuoteController = require("../controllers/quote.controller")

module.exports = app => {
    app.get("/api/quotes/all", QuoteController.findAllQuotes)
}