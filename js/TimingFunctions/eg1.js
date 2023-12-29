

function submitMessage()
{
    let div=document.querySelector("div")
    div.style.display="block"
    setTimeout(()=>
    {
        div.style.display="none"
    },5000)
}