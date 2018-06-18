const expect = require('expect');
const utils = require ('./utils');

describe('utils', ()=>{

    describe("#add", ()=>{
        it('should add two numbers', ()=>{
            var result = utils.add(3,5);
            expect(result).toBe(8).toBeA('number');
           
        
        });
    })
    it('should add two numbers delayed by 1 second', (done)=>{
        utils.asyncAdd(4,3, (sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    })
    it('should return the square of the number', () => {
        var square = utils.square(5);
        expect(square).toBe(25).toBeA('number');
    });
    
    it('should asquare the number and be delayed by 1 second', (done)=>{
        utils.asyncSquare(5, (sqr)=>{
            expect(sqr).toBe(25).toBeA('number');
            done();
        })
    })
    
    it('should varify first and last names are set', ()=>{
        var user = {
            location: 'denver',
            age: 89
        }
        var res = utils.setName(user, 'Danyon Satterlee');
        expect(res).toInclude({
            firstName: 'Danyon',
            lastName: 'Satterlee'
        })
    
    })

})


// it('shoudl expect some values', () => {
//     // expect(12).toNotBe(11)
//     expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//     expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'danyon',
//         age:83,
//         location:"antartica"
//     }).toInclude({
//         age:83
//     })
// });