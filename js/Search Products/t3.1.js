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

// & Fetching ProductDetails by its id to assign the body part
let ProductDetails=document.getElementById("ProductDetails")
console.log(ProductDetails);

// *By using Map Method
// & Adding body part using Map method,
Products.map(({id,pname,color,img,price},index)=>
{
    // & Adding ProductDetails using inner html to tbody
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

// *Getting products by Searching its full name

function getProducts()
{
    // & initially the function will be empty
    ProductDetails.innerHTML+=""


    let SearchProduct=document.getElementById("SearchProduct")
    console.log(SearchProduct);
    let searchValue=SearchProduct.value
    console.log(searchValue);

    // *Getting searched products using filter method
    // & using filter method will give all the products with the value we are giving

    let filteredProducts=Products.filter(({pname})=>
    {
        // ^ Returns only if we give exactly same name with uppercase and lowercase
        // return pname===searchValue
        // ^ Returns only if we give exactly same name no need to have same uppercase or lower case
        return (pname.toLocaleLowerCase()).includes(searchValue.toLowerCase())
    })

    console.log(filteredProducts);

    // * Fetching products using map method
    // & filtered array will be sent to the map method and the 
    // & Map method will return the products by iterating array of objects

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
 
// getProducts()