const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
       a:{
           demand:true,
           alias: 'address',
           describe: 'address to fetch weather for',
           string: true
       } 
    })
    .help()
    .alias('help', 'h')
    .argv;

   var encodedAddress =encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDgg8K0v79rBKFtcYy0IR9Oj6dSM4lFHrc`,
    json:true
}, (error, response, body)=>{
    if(error){
        console.log(error);
        console.log('unable to connect to google servers');

    } else if(body.status === "ZERO_RESULTS"){
        console.log("zero results");
    } else if(body.status === "OK"){
        console.log(`Lat: ${body.results[0].geometry.location.lat}`);
        console.log("--");
        console.log(`Long: ${body.results[0].geometry.location.lng}`);
    }
    

});