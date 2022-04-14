var cors = require('cors')
var express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const path = require('path')
var app  = express();
const morgan = require("morgan");
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        console.log('Connected to MongoDB')
    }
)
app.use('/user', require('../server/Route/userRouters'));
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})