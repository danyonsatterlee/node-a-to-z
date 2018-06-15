var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject('arguments must be numbers')
            }
        }, 1500)
    })
};

asyncAdd(9, 5).then((res) => {
    console.log('result: ', res)
    return asyncAdd(res, 55);
}, (err) => {
    console.log(err)
}).then((res) => {
    console.log("should be 47", res)

}, (err) => {
    console.log(err)
});

// somePromise.then((message)=>{
//     console.log('printing success', message)

// }, (err)=>{
//     console.log("Printing Error: "+ err)

// })