let count=0;
let span =document.getElementById("counter")

let counterInterval;

function startCounter()
{
    counterInterval=setInterval(()=>
    {
        span.innerText=++count
    },1000)
}

function stopCounter()
{
    clearInterval(counterInterval)
}

function resetCounter()
{
    count=0
    span.innerText=0
    clearInterval(counterInterval)
}