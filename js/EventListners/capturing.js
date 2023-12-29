let grandparent=document.querySelector(".grandparent")
let parent=document.querySelector(".parent")
let child=document.querySelector(".child")
let grandchild=document.querySelector(".grandchild")

// * If we use false in third argument it behaves as event bubbling

function gp()
{
    console.log("GrandParent");
}
grandparent.addEventListener("click",gp,true)


function p()
{
    console.log("Parent");
}
parent.addEventListener("click",p,true)


function c()
{
    console.log("Child");
}
child.addEventListener("click",c,true)


function gc()
{
    console.log("GrandChild");
}
grandchild.addEventListener("click",gc,true)
