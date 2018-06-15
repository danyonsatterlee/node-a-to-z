const request = require('request');
const weatherUrl ="https://api.darksky.net/forecast/7f3eec9b9bc4505f84e8bc8b52a07e1b/";



let getWeather = (lat, long, callback) => {
request({
    url: weatherUrl+lat+","+long,
    json: true
}, (error, response, body) => {
    if(error){
        console.log('unable to connect to forecast.io');
    }
    else if(response.statusCode === 400){
        console.log('unable to fetch weather');
    }
    else if(response.statusCode === 200){
        callback(undefined,{
            temperture:body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature

        });
    }
});
}


module.exports = {
    getWeather
};