let students={snam:"syed",age:31} //Creating object

//& adding object using inner html in string not posiible
//& it will accept as the text inside h1 tag
document.body.innerHTML="<h1>students</h1>" 
//& same thing happens even if you try to convert to json
document.body.innerHTML="<h1>${JSON.stringify(students)</h1>"

//& instead you can add using local storage and session storage
//& you need to convert to json object
localStorage.setItem("students",JSON.stringify(students))

//& if you want to get the object
//& again convert it to JS object
console.log(JSON.parse(localStorage.getItem("students")));
console.log(localStorage.key(1));