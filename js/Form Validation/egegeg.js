// let fname=document.getElementById("fname")
//     let inputfname=fname.value
//     let lname=document.getElementById("lname")
//     let inputlname=lname.value
    let email=document.getElementById("email")
    // let inputemail=email.value
    // let pwd=document.getElementById("pwd")
    // let inputpwd=pwd.value
    // let error=document.querySelector(".error")
    let btn =document.getElementById("btn")
    function a () {
        let inputemail=email.value
        let a;

        console.log(inputemail);
    }
    btn.addEventListener("click",a)

function validation(e)
{
   

    
    if(inputfname==="" && inputlname==="")
    {
        error.style.display="block"
        error.innerText="Fullname and Lastname are Mandatory"
        return false;
    }

    if(inputfname==="")
    {
        error.style.display="block"
        error.innerText="Fullname is Mandatory"
        return false;
    }

    else if(!/^[A-Za-z\s]+$/.test(inputfname))
    {
        error.style.display="block"
        error.innerText="Fullname accepts only Alphabets "
        return false;
    }

    else if(inputlname==="")
    {
        error.style.display="block"
        error.innerText="Lastname is Mandatory"
        return false;
    }

    else if(!/^[A-Za-z]+$/.test(inputlname))
    {
        error.style.display="block"
        error.innerText="Lastname accepts only Alphabets "
        return false;
    }

    else if(!/[\@]+/.test(inputemail))
    {
        error.style.display="block"
        error.innerText="email must include @"
        return false;
    }
    else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(inputpwd))
    {
        error.style.display="block"
        error.innerText="A password contains at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !."
        return false
    }
    else 
    { 
        error.style.display="none"
    }

    let keyname=`${inputemail}`
    console.log(keyname);
    
    let data={keyname:{fname:`${inputfname}`,lname:`${inputlname}`,pwd:`${inputpwd}`}}

    // let data={fname:`${inputfname}`,lname:`${inputlname}`,email:`${inputemail}`,pwd:`${inputpwd}`}
    console.log(data);

    let newuser=Object.assign({},data)
    localStorage.setItem("Userdata",JSON.stringify(newuser))


    // localStorage.setItem("fname",`${inputfname}`)
    // localStorage.setItem("lname",`${inputlname}`)
    // localStorage.setItem("email",`${inputemail}`)
    // localStorage.setItem("pwd",`${inputpwd}`)
    



    

    

}

// validation()/





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link rel="stylesheet" href="./fveg1.css">
</head>
<body>
    
    <form action="" >

        <div class="ff">
            <!-- <div class="fname">
                <input id="fname" type="text" placeholder="First Name">
            </div>
            <div class="lname">
                <input id="lname" type="text" placeholder="Last Name">
            </div> -->
            <div class="email">
                <input id="email" type="email" placeholder="Email Id">
            </div>
            <!-- <div class="pwd">
                <input id="pwd" type="password" placeholder="Password">
            </div>
            <div class="error">
                Error Message
            </div> -->
        </div>

        <div class="buttons">
            <div class="signup">
                <button type="button" id="btn">Sign Up</button>
            </div>
            <!-- <div class="login">
                <button>Login</button>
            </div> -->
        </div>

    </form>

    <script src="./fveg1.js"></script>
</body>
</html>