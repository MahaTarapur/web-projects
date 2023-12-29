let a=60
let p=new Promise((resolve,reject)=>
{
    if(a===40)
    {
        resolve({sname:"Syed",age:31})
    }
    else
    {
        reject("Error: Not Found")
    }
})
console.log((p.sname));

p.then((data)=>
{
    console.log(data);
    console.log(data.sname.toUpperCase());
}).catch((err)=>
{
    console.log(err);
})