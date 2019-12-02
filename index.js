const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/relationships',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// routes
app.use(require('./routes'));

app.listen(3000, () => console.log('server on!'));
