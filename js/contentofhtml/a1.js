let i=document.querySelector(".i")
console.log(i);

// ! Returns only text
let a1=i.innerText
console.log(a1);

// ! Returns text with spaces and line breaks
let a2=i.textContent
console.log(a2);

// ! Returns exactly same copy with space line breaks and html tags as well
let a3=i.innerHTML
console.log(a3);