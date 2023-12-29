let btn=document.querySelector("#btn")
// console.log(btn);

let count=0;
let c;

let cno=document.querySelector("#cno")
console.log(cno);


function counter()
{
    cno.innerText=((++count))
    if(count===10)
    {
            btn.removeEventListener("click",counter)
    }
}

btn.addEventListener("click",counter)


function removeCounter()
{
    btn.removeEventListener("click",counter)
}



