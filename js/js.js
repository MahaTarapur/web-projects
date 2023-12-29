// let p=["mobile","watch","earphone","camera","watch","mobile","laptop"]
// console.log((p.splice(2,2,"hello","hi")));
// console.log(p);

// let p=["mobile","tv","freeze","laptop"]
// console.log(p.splice(2,0,"iphone","mobile"));
// console.log(p);

//! i case insensitive first match
//! g case sensitive all match
//! gi case insensitive all match




console.log("Maha".match(/[A-Z]/));
console.log("MaHa".match(/[A-Z]/i));
console.log("MaHa".match(/[A-Z]/g));
console.log("Maha".match(/[A-Z]/gi));

console.log("maha".match(/[A-Z]/));
console.log("maHa".match(/[A-Z]/i));
console.log("maHA".match(/[A-Z]/g));
console.log("maha".match(/[A-Z]/gi));

console.log("MaHa".match(/[a-z]/));
console.log("MaHa".match(/[a-z]/i));
console.log("MaHa".match(/[a-z]/g));
console.log("MaHa".match(/[a-z]/gi));

console.log("maHa".match(/[a-z]/));
console.log("maHa".match(/[a-z]/i));
console.log("maHA".match(/[a-z]/g));
console.log("maha".match(/[a-z]/gi));

console.log("MaHa".match(/[^A-Z]/));
console.log("MaHa".match(/[^A-Z]/i));
console.log("MaHa".match(/[^A-Z]/g));
console.log("MaHa".match(/[^A-Z]/ig));

console.log("maHa".match(/[^A-Z]/));
console.log("maHa".match(/[^A-Z]/i));
console.log("maHa".match(/[^A-Z]/g));
console.log("maHa".match(/[^A-Z]/ig));







