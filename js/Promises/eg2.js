let a=60;
let p=new Promise((resolve,reject)=>
{
    if(a===40)
    {
        resolve({sname:"syed",age:31})
    }
    else
    {
        reject("Error :not found")
    }
})

console.log(p.sname);

p.then((data)=>
{
console.log(data);
console.log(data.sname.toUpperCase());
return JSON.stringify(data)
}).
then((d)=>
{
    console.log(d);
}).
catch((err)=>
{
    console.log(err);
}).
finally(()=>
{
    console.log("Finally Always Runs");
})

