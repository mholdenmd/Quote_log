const express = require("express"); //for store api
const cors = require("cors"); // allows everything to talk to each other
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());

require("./server/config/mongoose.config")
require("./server/routes/quotes.routes")(app)

// app.get("/", (req, res) => {
//   res.json({"message": "ok"});
// });

app.listen(port, () => console.log(`Listening on port ${port}`));

// THE ORDER MATTERS!!!