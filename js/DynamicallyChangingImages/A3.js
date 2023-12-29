let images=["./img/i1.webp","./img/i2.jpeg","./img/i3.webp","./img/i4.webp","./img/i5.jpeg","./img/i6.jpeg","./img/i7.jpeg","./img/i8.jpeg","./img/i9.webp"]

let al=document.querySelector("#al")
console.log(al);
let count=images.indexOf(al.src)
console.log(count);

function next()
{
    let al=document.getElementById("al")
    console.log(al);
    console.log(al.src);
    if(count<=((images.length)-1))
    {
        al.src=images.at(count)
        al=count++
    }    
    console.log(count);
    al.src=images.at(count)
}
// next()


function prev()
{
    let img=document.querySelector("img")
    let src=img.src
    let count=Number(img.title);
    if(count<=((images.length)-1))
    {
        img.src=images.at(count)
        img.title=count-1
    }    
}



// function next()
// {
//     let img=document.querySelector("img")
//     let src=img.src
//     let count=Number(img.title);
//     if(count<=((images.length)-1))
//     {
//         img.src=images.at(count)
//         img.title=count+1
//     }    
//     else
//     {
//         img.src=images.at(0)
//         img.title=0
//     }
// }


// function prev()
// {
//     let img=document.querySelector("img")
//     let src=img.src
//     let count=Number(img.title);
//     if(count<=((images.length)-1))
//     {
//         img.src=images.at(count)
//         img.title=count-1
//     }    
// }

