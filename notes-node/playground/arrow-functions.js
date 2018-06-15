var square = x => x*x;



 console.log(square(99));

 var user = {
     name: 'danyon',
     sayHi: () =>{
         console.log(`Hi ${this.name}`);
     },
     sayHiAlt () {
         console.log(arguments);
        console.log(`Hi ${this.name}`)
     }
    };

user.sayHiAlt(1,2,3)