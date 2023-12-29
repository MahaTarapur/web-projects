
d=new Date()
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.toLocaleString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleDateString("en-In",{weekday:"long",month:"numeric"}));
console.log(d.toLocaleDateString("en-In",{year:"2-digit"}));

// console.log(getMilliseconds());
// console.log(getDay());

// function getDate(d=new Date())
// {
//     a=d.getFullYear()
//     b=d.getMonth()+1
//     c=d.getDate()
//     date=a+"-"+b+"-"+c;
//     return date ;
// }
// console.log(getDate());

// // ---------------------------------------------------------------------------------------

// function getDate1(d=new Date())
// {
//     let months=["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]
//     a=d.getFullYear()
//     b=months.at((d.getMonth()))
//     c=d.getDate()
//     date=a+"-"+b+"-"+c;
//     return date ;
// }
// console.log(getDate1());

// // ---------------------------------------------------------------------------------------


// function getDate2(d=new Date())
// {
//     a=d.getDate()
//     let months=["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]
//     b=months.at((d.getMonth()))
//     c=d.getFullYear()
//     date=a+"-"+b+"-"+c;
//     return date ;
// }
// console.log(getDate2());

// function getday(d=new Date("1999/07/30"))
// {
//     a=d.getDay()
//     // console.log(a);
//     let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//     b=day.at(a)
//     return b
// }
// console.log(getday());


// // input.required=required;


