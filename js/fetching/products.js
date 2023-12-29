let product=document.getElementById("product")
console.log(product);


let products=fetch("https://fakestoreapi.com/products")
console.log(products);

products.
then((data)=>
{
    return data.json()
}).
then((productsdetails)=>
{
    console.log(productsdetails);
    productsdetails.map(({title,price,description,image,rating:{rate}})=>
    {
        product.innerHTML+=
        `
        <div class="box">
            <div id="pic">
                <img  src="${image}" alt="">
            </div>
            <div id="details">
                <div id="top">
                    <div id="title">
                        <h4>${title}</h4>
                    </div>
                    <div id="price">
                        <h3>
                        <p>Price</p>
                        ${price} $
                        <br>
                        <p style="font-size: 12px;" >Rating ${rate}</p>
                        </h3> 
                    </div>
                </div>
                <div id="description">
                    <p>${description}</p>
                </div>      
            </div>
        </div>
        `
    })
})



