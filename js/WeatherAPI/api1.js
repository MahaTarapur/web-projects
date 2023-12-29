function getDate(d=new Date())
{
    a=d.getFullYear()
    b=d.getMonth()+1
    c=d.getDate()
    date=c+"-"+b+"-"+a;
    return date ;
}
let dateformat=(getDate());

let btn=document.getElementById("i")

async function getWeatherAPI()
{

    let card=document.querySelector(".card")
        console.log(card);

    let main=document.querySelector(".main")

    card.innerHTML=""
    try
    {
        let btn =document.getElementById("searchinput")
        console.log(btn);
        let sv=btn.value
        console.log(sv);
        let wd=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sv}&units=metric&appid=fa4e4ea9100c941fce9ed6b36a97ca15`)
        
        //&london 
        // let wd=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fa4e4ea9100c941fce9ed6b36a97ca15")

        wd=await wd.json()
        console.log(wd); 

        let card=document.querySelector(".card")
        console.log(card);

        let main=document.querySelector(".main")


     
        card.innerHTML+=
        `
        <div class="datecity"> 
        <br>
        <h4>${getDate()}</h4>
        <h1>${wd.name}</h1>
        </div>       
        `

        wd.weather.map(({id,main,description,icon})=>
        {
            card.innerHTML+=
           ` <div class="temp">
           <img src=" https://openweathermap.org/img/wn/${icon}@2x.png"></div>
           <h3 id="te"> ${wd.main.temp} <br> ${description}</h3>
           `
           
        })

        card.innerHTML+=
        `
        <div class="main">
        <p>Feels like:${wd.main.feels_like}</p>
        <p>Wind Speed:${wd.wind.deg}m/s  &nbsp; Pressure:${wd.main.pressure}hPa</p>
        <p>Cloudiness:${wd.clouds.all}%  &nbsp; &nbsp; &nbsp; &nbsp;  Humidity: ${wd.main.humidity}%</p>
        <p>Visibility:${wd.visibility}m</p>
        </div>        
        `      
    
    }
    catch(err)
    {
        console.log(err.message);
    }
}

    let counterinterval;


    function updateWeather()
    {
        counterinterval=setInterval(getWeatherAPI,10000)
       {
        console.log("refreshed");
       }
    }

    function stopupdating()
    {
    clearInterval(counterinterval)
    {
        console.log("stoped");
    }
    }
        
// getWeatherAPI()
