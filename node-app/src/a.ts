let x: number = 1;
console.log(x);

function greet(firstName: string) {
    console.log("Hello " + firstName);
}

greet("harkirat");


//

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));


// 
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})


//

//const greety = (name: string) => `Hello, ${name}!`;
//noImplicitAny: false

const greety = (string) => `Hello, ${name}!`;