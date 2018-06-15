const request = require('request');

let geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDgg8K0v79rBKFtcYy0IR9Oj6dSM4lFHrc`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google servers');
        } else if (body.status === "ZERO_RESULTS") {
            callback("zero results");
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};