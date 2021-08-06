const mongoose = require('mongoose');

const db_name = 'quote_db'

mongoose.connect(`mongodb://localhost/${db_name}`, { //it must be `(ticks not ' or "" it will not work)
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));