
const express = require("express");

require("dotenv").config()

const bookRoute = require('./routes/boooks')


const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 3000;

// adding middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/books', bookRoute)

// coonect to mongo db atlas
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
)
    .then(() => {
        console.log("connected to mongodb atlas")
    }).catch(error => {
        console.log("something wrong happened", error)
    })

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})