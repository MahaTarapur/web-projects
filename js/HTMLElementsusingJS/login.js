let body=document.body
let form=document.createElement("form")
form.action="./loginhome.html"

let username=document.createElement("input")
username.type="text"
username.placeholder="UserName"
username.style.fontSize="20px"
 

let password=document.createElement("input")
password.type="password"
password.placeholder="password"

let hr1=document.createElement("hr")

let hr2=document.createElement("hr")

let button=document.createElement("button")
button.innerText="Sign Up"

body.prepend(form)
form.append(username)
form.append(hr1)
form.append(password)
form.append(hr2)
form.append(button)