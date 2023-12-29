let Products=
[
    {
        id:1,
        pname:"OnePlus Nord CE 2 Lite 5G",
        color:"Blue Tide",
        img:"./images/p.t3.1.jpg",
        price:17999
    },
    {
        id:2,
        pname:"realme narzo 60 5G ",
        color:"Mars Orange",
        img:"./images/p.t3.2.jpg",
        price:17999
    },
    {
        id:3,
        pname:"Echo Dot smart speaker with Alexa",
        color:"Black",
        img:"./images/p.t3.3",
        price:2999
    },
    {
        id:4,
        pname:"Kindle",
        color:"Black",
        img:"./images/p.t3.4.jpg",
        price:7999
    },
    {
        id:5,
        pname:"Redmi F Series HD Ready Smart LED Fire TV",
        color:"Black",
        img:"./images/p.t3.5.jpg",
        price:11499
    },
    {
        id:6,
        pname:"Canon Digital SLR Camera",
        color:"Black",
        img:"./images/p.t3.6.jpg",
        price:41989
    },
    {
        id:7,
        pname:"boAt Airdopes",
        color:"Spirit Lime",
        img:"./images/p.t3.7.jpg",
        price:2999
    },
    {
        id:8,
        pname:"Apple Watch",
        color:"Starlight",
        img:"./images/p.t3.8.webp",
        price:23999
    },
    {
        id:9,
        pname:"Bluetooth Party Speaker",
        color:"Black",
        img:"./images/p.t3.9.webp",
        price:1299
    },
    {
        id:10,
        pname:"boAt Bassheads Ear Earphones ",
        color:"Green",
        img:"./images/p.t3.10.jpg",
        price:399
    },

]

let ProductDetails=document.getElementById("ProductDetails")
let total=document.getElementById("total")

Products.map(({id,pname,color,img,price},index)=>
{
    ProductDetails.innerHTML+=
    `
    <tr>
        <td>${index+1}</td>
        <td>${pname}</td>
        <td>${color}</td>
        <td id="img">
            <img src="${img}" alt="">
        </td>
        <td>${price}</td>
    </tr>
    `
})

// & getting the prices array
let prices=Products.map(({price})=>price)

let totalPrice=prices.reduce((a,b)=>{return a+b},0)
total.innerText=totalPrice
 
function getProducts()
{
    ProductDetails.innerHTML=""

    let SearchProduct=document.getElementById("SearchProduct")
    console.log(SearchProduct);
    let searchValue=SearchProduct.value
    console.log(searchValue);

    let filteredProducts=Products.filter(({pname,color,price})=>
    {
        return (pname.toLocaleLowerCase()).includes(searchValue.toLowerCase()) ||
        (color.toLocaleLowerCase()).includes(searchValue.toLowerCase()) ||
        price===Number(searchValue)
    })


    // & Displaying message through innerhtml if the product is not found

    if(!filteredProducts.length)
    {
        ProductDetails.innerHTML=
    `
    <h1 style=" color:rgb(41, 1, 41);text-transform:capitalize">${searchValue} not found</h1>
    `
    }

    // & returning total price of available products

    let filteredPrices=filteredProducts.map(({price})=>price)
    console.log(filteredPrices);

    let filteredProductsTotal=filteredPrices.reduce((a,b)=>{return a+b},0)
    total.innerText=filteredProductsTotal

    filteredProducts.map(({id,pname,color,img,price},index)=>
    {
        ProductDetails.innerHTML+=
    `
    <tr>
        <td>${id}</td>
        <td>${pname}</td>
        <td>${color}</td>
        <td id="img">
            <img src="${img}" alt="">
        </td>
        <td>${price}</td>
    </tr>
    `
    })  
}
