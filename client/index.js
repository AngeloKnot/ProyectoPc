console.log("Web pack done 🍕");

//codigo ES6
//DEfault Parameters
let show = (msg) => {
    console.log(msg)
}

show();

//async await
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000)
    })
}

resolveAfter2Seconds().then(data => { console.log(data) });