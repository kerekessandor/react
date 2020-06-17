const express = require('express');
const router = require('./routes');
const newsRouter = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 5001;

app.use('/', router);
app.use('/api/', newsRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));