const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;


describe('server', ()=>{
describe('#test 404', () =>{
    it('should return a 404', (done)=>{
        request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
            expect(res.body).toInclude({
                error: 'page not found'
            })  
        })
        .end(done);
    });

})

describe('#find young kelley', ()=>{
    it('should return a user kelley', (done)=>{
        request(app)
        .get("/users")
        .expect((res)=>{
            expect(res.body).toInclude({
                name: 'kelley', age: 4
            })
        })
        .end(done);
    });

})
});
