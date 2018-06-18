const express = require('express');

var app = express();


app.get("/", (req,res) => {
    res.status(404).send(
    {
        error: 'page not found',
        name: 'todo app v1.0'
    }
    );
});

app.get("/users", (req, res)=>{
    res.send([
        {
        name: 'sally',
        age: 24
    },
    {
        name:'drew',
        age:90
    },
    {
        name:'kelley',
        age:4
    }
])
})

app.listen(3003);

module.exports.app = app;