const express = require('express');
const hbs = require('hbs');

var app = express(); 
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) =>{
    return text.toUpperCase();
})


app.get('/', (req, res)=>{
    res.render('index.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'welcome hello'
    });
});


app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res)=>{
    res.send({
        message: 'this is a bad request'
    });
});

app.listen(3003, ()=>{console.log('server is up on port 3003')});