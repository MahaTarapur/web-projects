function clock()
{
    let dt=new Date()
    let displayDate=document.getElementById("date")
    let displayTime=document.getElementById("time")

    let year=dt.getUTCFullYear()
    let month=dt.getMonth()
    let day=dt.getDay()
    let date=dt.getDate()
    let hours=dt.getHours()
    let minutes=dt.getMinutes()
    let seconds=dt.getSeconds()
    
    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

    let timeFormat=`${hours}:${minutes}:${seconds}`

    let dateFormat=`${days[day]} ${date} ${months[month]} ${year}`


    displayDate.innerText=dateFormat
    displayTime.innerText=timeFormat

} 

setInterval(clock,1000);