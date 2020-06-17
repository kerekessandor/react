const express = require('express');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));