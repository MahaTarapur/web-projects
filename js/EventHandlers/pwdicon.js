function togglePassword()
{
    let pwd=document.getElementById("pwd")
    let i=document.getElementById("i")
    if(pwd.type==="password")
    {
        pwd.type="text"
        i.className="fa fa-eye-slash"
    }
    else
    {
        pwd.type="password"
        i.className="fa fa-eye"
    }

}