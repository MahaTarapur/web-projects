let body=document.body;
let h1=document.createElement("h1")
console.log(h1);


// ^Adds only in console
h1.innerText="Heading from javascript"
h1.align="center"

// ^Adding to DOM

body.append(h1) //~Adds in the end of body
// body.prepend(h1) //~Adds at the starting of body