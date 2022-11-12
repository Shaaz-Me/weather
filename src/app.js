require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Home = require('../routes/homeRoute.js');
const About = require('../routes/aboutRoute.js');
const Weather = require('../routes/weatherRoute.js');
const Error = require('../routes/errorRoute.js');

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname,"..","public")));

app.set('view engine','ejs');

app.use("/", Home);
app.use("/about", About);
app.use("/weather", Weather);
app.use('*',Error);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});