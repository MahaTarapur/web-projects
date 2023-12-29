sessionStorage.setItem("sname","syed")
sessionStorage.setItem("age",31)
sessionStorage.setItem("dept","cse")

console.log(sessionStorage.getItem("sname"));
console.log(sessionStorage.getItem("age"));
console.log(sessionStorage.getItem("dept"));
console.log(sessionStorage.getItem("gender"));

sessionStorage.removeItem("age")
console.log(sessionStorage.getItem("age"));

console.log(sessionStorage.length);
console.log(sessionStorage.key(1));

sessionStorage.clear()
