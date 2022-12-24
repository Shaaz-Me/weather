import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

class weatherController{
    static getPage = (req, res) => {
        res.render('weather');
    };


    static getDetails = async (req, res) => {
    
        try {
    
            let cityVal = req.body.getCity;
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${process.env.API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];


            const sendingData = {
                cityName: `${arrData[0].name}, ${arrData[0].sys.country}`,
                cityStyle: '#fff',
                hideData: false,
                tempVal: arrData[0].main.temp,
                tempStatus : `http://openweathermap.org/img/wn/${arrData[0].weather[0].icon}@2x.png`
            }
            res.send(sendingData);
            
        } catch (error) {
            const sendingData = {
                cityName: `Plz enter the city name properly`,
                hideData: true
            }
            res.send(sendingData);
        }
    };
}



export default weatherController;