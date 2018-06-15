const express = require('express');

var app = express(); 

app.get('/', (req, res)=>{
    // res.send('<h1>hello world</h1>hello express');
    res.send({
        name: 'danyon',
        likes: ['chairs', 'hiking']
    })
});


app.get('/about', (req, res)=>{
    res.send('about');
});

app.get('/bad', (req, res)=>{
    res.send({
        message: 'this is a bad request'
    });
});
app.listen(3003);