const QuoteController = require("../controllers/quote.controller")

module.exports = app => {
    app.get("/api/quotes/all", QuoteController.findAllQuotes)
    app.post("/api/quotes/create", QuoteController.createOneQuote)
    app.get("/api/quotes/:quoteId", QuoteController.findAQuote)
    app.put("/api/quotes/update/:quoteId", QuoteController.updateAQuote)
    app.delete("/api/quotes/delete/:quoteId", QuoteController.deleteQuote)
    

    
}