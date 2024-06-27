const express = require('express');
const app = new express();
const routes = require('./routes');
const logger = require('morgan');
require('dotenv').config();
require('./db/index.js');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on the port = ${PORT}`);
});