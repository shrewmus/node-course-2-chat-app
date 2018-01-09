/**
 * @file server.js
 * @author shrewmus (shrewmus@yandex.ru contact@shrewmus.name)
 * Date: 1/9/18
 * (c) 2018
 */

const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(publicPath));


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
