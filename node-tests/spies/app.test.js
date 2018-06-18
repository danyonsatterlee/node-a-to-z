const expect = require('expect');
const rewire = require('rewire');

var app =rewire('./app');


describe ('app', ()=>{
    var db = {
        saveUser:expect.createSpy()
    };
    app.__set__('db',db);
    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Danyon', 38);
        expect(spy).toHaveBeenCalledWith('Danyon', 38)
    });

    it('shoudl call save user with user object', ()=>{
        var email = 'andrew@example.com';
        var password = "123";

        app.handleSignup(email, password);
        expect (db.saveUser).toHaveBeenCalledWith({email, password})
    })
})