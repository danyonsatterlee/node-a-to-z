const request = require ('request')


var geocodeAddress = address =>{
    return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDgg8K0v79rBKFtcYy0IR9Oj6dSM4lFHrc`,
        json: true
    }, (error, response, body) => {
        if (error) {
            reject('unable to connect to google servers');
        } else if (body.status === "ZERO_RESULTS") {
            reject("zero results");
        } else if (body.status === "OK") {
            resolve( {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
    })
};


geocodeAddress('82435').then((location)=>{
    console.log(JSON.stringify(location,undefined, 2))
}, (err)=>{
    console.log(err);
});