const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const newsRouter = require('./routes/news');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5001;

const dBUrl = process.env.MONGO_DB_URL;

mongoose.connect(
    dBUrl,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to: ' + dBUrl);
        } else {
            console.log('Connected to dB');
        }
    }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', router);
app.use('/api/', newsRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));