let Students=
[
    {
        id:1,
        sname:"Stefan",
        age:20,
        imgurl:"./images/t2.1.Stefan_Salvatore.png"
    },
    {
        id:2,
        sname:"Damon",
        age:21,
        imgurl:"./images/t2.2.Damon_Salvatore_promo.jpg"
    },
    {
        id:3,
        sname:"Elena",
        age:19,
        imgurl:"./images/t2.3.Elena_Giblert.jpeg"
    },
    {
        id:4,
        sname:"Caroline",
        age:21,
        imgurl:"./images/t2.4..jpg"
    },
    {
        id:5,
        sname:"Bonnie",
        age:20,
        imgurl:"./images/t2.5Nmacc-2023-0401-Kat_Graham.jpg"
    }
]

let StudentDetails=document.getElementById("StudentDetails");
console.log(StudentDetails);

for(const {id,sname,age,imgurl} of Students)
{
    StudentDetails.innerHTML+=
    `
    <tr>
        <td>${id}</td>
        <td>${sname}</td>
        <td>${age}</td>
        <td>
            <img src="${imgurl}" alt="">
        </td>
    </tr>
    `
}


let input=document.querySelector("input")
console.log(input);
console.log(input.type);


function search()
{
    input.type="text";
    console.log(input.type);
    // input.type="text";
    // console.log(input.type.innerText);
}



// let srch=document.getElementById("srch")

// srch.addEventListener("click",search)

// let srch=document.getElementById("srch")

// console.log(String(srch.innerText));

// function search()
// {
//     console.log(String(srch.innerText));
// }
// srch.addEventListener("click",search)


// function s(){s=srch.innerText}
// console.log(s());
// console.log(srch.innerText);
// srch=StudentDetails.filter(function s()
// {

// })