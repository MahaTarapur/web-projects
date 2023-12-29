function toggle()
{
    let image=document.querySelector("img")
    let button=document.getElementById("button")
    if((image.style.visibility==="hidden") && (button.innerText="SHOW"))
    {
    image.style.visibility="visible"
    button.innerText="HIDE"
    }
    else
    {
    image.style.visibility="hidden"
    button.innerText="SHOW"
    }
}


