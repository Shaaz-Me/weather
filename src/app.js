import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const { urlencoded } = bodyParser;
import { fileURLToPath } from 'url';
import path from 'path';
import Home from '../routes/homeRoute.js';
import About from '../routes/aboutRoute.js';
import Weather from '../routes/weatherRoute.js';
import Error from '../routes/errorRoute.js';

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),"..","public")));

app.set('view engine','ejs');

app.use("/", Home);
app.use("/about", About);
app.use("/weather", Weather);
app.use('*',Error);


app.listen(port, () => {});