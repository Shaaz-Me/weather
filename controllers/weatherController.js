require('dotenv').config();
const fetch = require('node-fetch');
const weatherGet = (req, res) => {
    res.render('weather', { search: "false" });
};

const getCurrentDay = (dayVal) => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[dayVal];
};

const getCurrentDate = (curDate, curMonth) => {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return `${curDate} ${months[curMonth]}`
};
const weatherPost = async (req, res) => {

    try {

        const now = new Date();

        let cityVal = req.body.city;
        if (cityVal === "") {
            const sendingData = {
                search: true,
                cityName: `Plz write city name before search`,
                cityStyle: '#fff',
                hideData: true
            }
            res.render('weather', sendingData);
        }
        else {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${process.env.API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];


            const sendingData = {
                search: true,
                cityName: `${arrData[0].name}, ${arrData[0].sys.country}`,
                cityStyle: '#fff',
                hideData: false,
                tempVal: arrData[0].main.temp,
                curDay: getCurrentDay(now.getDay()),
                curDate: getCurrentDate(now.getDate(), now.getMonth()),
                tempStatus : `http://openweathermap.org/img/wn/${arrData[0].weather[0].icon}@2x.png`
            }
            res.render('weather', sendingData);
        }
    } catch (error) {
        console.log(error);
        const sendingData = {
            search: true,
            cityName: `Plz enter the city name properly`,
            cityStyle: '#fff',
            hideData: true
        }
        res.render('weather', sendingData);
    }
};

module.exports = { weatherGet, weatherPost };