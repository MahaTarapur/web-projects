products=["mobile","watch","earphone","laptop","speaker","mobile","wallet"]
numbers=[1,2,3,4,5,10,20,30,40,50]

console.log(products);
console.log(numbers);
// &includes

// let p1=products.includes("laptop")
// console.log(p1);
// let p2=products.includes("headphones")
// console.log(p2);

// &indexOf
// let p1=products.indexOf("earphone")
// console.log(p1);
// let p2=products.indexOf("ring")
// console.log(p2);
// let p3=products.IndexOf("mobile",3)
// console.log(p3);

// &lastIndexOf
// let p1=products.lastIndexOf("laptop")
// console.log(p1);
// let p2=products.lastIndexOf("mobile")
// console.log(p2);
// let p3=products.lastIndexOf("mobile",3)
// console.log(p3);

// &slice
// let p1=products.slice(1,4)
// console.log(p1);
// let p2=products.slice(4)
// console.log(p2);
// let p3=products.slice(4,5)
// console.log(p3);
// let p4=products.slice(4,4)
// console.log(p4);

// &concat
// let p1=[1,2,3]
// p2=products.concat(p1)
// console.log(p2);
// p3=p1.concat("hello",2,"lion")
// console.log(p3);

// &unshift
// let p1=products.unshift("watch")
// console.log(p1);
// console.log(products);
// let p2=products.unshift(2,3,4)
// console.log(p2);
// console.log(products);
// let p=["a","b","c"]
// let p3=products.unshift(p)
// console.log(p3);
// console.log(products);
// let p4=products.unshift("")
// console.log(p4);
// console.log(products);

// &push
// let p1=products.push("apple")
// console.log(p1);
// console.log(products);
// let p=[1,2]
// let p2=products.push(p)
// console.log(p2);
// console.log(products);
// let p3=products.push("")
// console.log(p3);
// console.log(products);

// &shift
// let p1=products.shift()
// console.log(p1);
// console.log(products);
// let p2=products.shift("maha")
// console.log(p2);
// console.log(products);

// &pop
// let p1=products.pop()
// console.log(p1);
// console.log(products);
// let p2=products.pop("laptop")
// console.log(p2);
// console.log(products);

// &splice
// let p1=products.splice(2,2)
// console.log(p1);
// console.log(products);
// let p2=products.splice(0,1,2,2,2)
// console.log(p2);
// console.log(products);
// let p3=products.splice(1)
// console.log(p3);
// console.log(products);
// let p4=products.splice(0)
// console.log(p4);
// console.log(products);

// &fill
// let p1=products.fill("A")
// console.log(p1);
// console.log(products);
// let p2=products.fill("A",2,4)
// console.log(p2);
// console.log(products);
// let p3=products.fill("A",0,2)
// console.log(p3);
// console.log(products);
// let p4=products.fill("A",3,1)
// console.log(p4);
// console.log(products);

// &reverse
// let p1=products.reverse()
// console.log(p1);
// console.log(products);


// &join
// let p1=products.join("")
// console.log(p1);
// let p2=products.join(" ")
// console.log(p2);
// let p3=products.join(" * ")
// console.log(p3);
// let p4=products.join(" @ ")
// console.log(p4);
// console.log(products);


// &at
// let p1=products.at(3)
// console.log(p1);
// let p2=products.at(33)
// console.log(p2);
// let p3=products.at(-2)
// console.log(p3);
// console.log(products);

// &for each
// products.forEach((ele,ind,arr) => 
//     {
//         console.log(ele);
//         console.log(ind);
//         console.log(arr);
//     });

// products.forEach((ele,ind,arr) => 
//     {
//         console.log(ele);
//         console.log(ind);
//     });

// let p1=products.forEach((ele,ind,arr) => 
//         {
//             console.log(ele);
//             return ele
//         });
// console.log(p1);
// console.log(products);

// // &map
// let p1=products.map((ele)=>ele)
// console.log(p1);
// let p2=products.map((ele)=>
// {
//     console.log(ele);
//     return ele.toUpperCase()
// })
// console.log(p2);
// console.log(products);

// let n1=numbers.map((num)=>
// {
//     console.log(num);
//     return num*2
// })
// console.log(n1);
// console.log(numbers);


// &filter

let p1=products.filter(ele => 
{
    console.log(ele);    
    return ele.includes("a")
})
console.log(p1);

let p2=products.filter(ele => 
    {
        return ele.includes("wa")
    })
console.log(p2);

let n1=numbers.filter(num=>
    {
        return num>3
    })
console.log(n1);
console.log(numbers);
    

// &sort

// let p1=products.sort()
// console.log(p1);

// let n1=numbers.sort((a,b)=>
// {
//     return a-b
// })
// console.log(n1);
// let p1=products.sort()

// let n1=numbers.sort((a,b)=>
// {
//     return b-a
// })
// console.log(n1);
// console.log(numbers);

// &some

// let n1=numbers.some(ele=>ele>2)
// console.log(n1);
// let n2=numbers.some(ele=>ele>2000)
// console.log(n2);
// console.log(numbers);


// &every

// let n1=numbers.every(ele=> ele<5)
// console.log(n1);
// let n2=numbers.every(ele=> ele>=1)
// console.log(n2);
// console.log(numbers);


// &find

// let n1=numbers.find(item => 
// {
//     console.log("hi");
//     return item===10
// })
// console.log(n1);
// console.log(numbers);


// &findIndex

// let n1=numbers.findIndex(ele=>
//     {
//         console.log("hi");
//         return ele===10
//     })
// console.log(n1);
// console.log(numbers);


// &reduce

// !second argument of reduce function is not passed
// let n1=numbers.reduce((a,b,c,d) =>
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return a
// },)
// console.log(numbers);

// let n2=numbers.reduce((a,b,c,d) =>
// {
//     console.log(a,b);
//     return a+b
// },)

// console.log("------------------------------");

// !second argument of reduce function passed

// let n3=numbers.reduce((a,b,c,d) =>
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return a
// },99)

// let n4=numbers.reduce((a,b,c,d) =>
// {
//     console.log(a,b);
//     return a+b
// },99)

// &reduceRight

// !second argument of reduceright function is not passed
// let n1=numbers.reduceRight((a,b,c,d) =>
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return a
// },)
// console.log(numbers);

// let n2=numbers.reduceRight((a,b,c,d) =>
// {
//     console.log(a,b);
//     return a+b
// },)

// console.log("------------------------------");

// !second argument of reduceRight function passed

// let n3=numbers.reduceRight((a,b,c,d) =>
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return a
// },99)

// let n4=numbers.reduceRight((a,b,c,d) =>
// {
//     console.log(a,b);
//     return a+b
// },99)


// let n=[2,6,3,[80,20,40],8,9,[99,22,[600,200],66,33]]
// console.log(n);
// let nn=[2,3,7,11,9,35,7]
// console.log(nn);


// // &flat

// // let n1=n.flat()
// // console.log(n1);
// // let n2=n.flat(2)
// // console.log(n2);

// // &flatmap

// // ! works on;y with dept one 
// let n1=nn.flatMap(ele=>ele+2)
// console.log(n1);

// // !does not work with array with nested array
// let n2=n.flatMap(ele=>ele+2)
// console.log(n2);

// // ! if you want to do using flat map first we should do flat then map

// // * this will perform the operation only on flattend array elements
// let n3=n.flatMap(ele=>ele).map(ele=>ele+2)
// console.log(n3);

// // *this willl first flatten for one depth because we are using flatmap
// // *the changes will be done to returned array elements 
// // *the changes will not be done to the nested array
// let n4=n.flatMap(ele=>ele)
// console.log(n4);
// let n5=n4.map(ele=>ele+2)
// console.log(n5);

// // !if you want to perform the operation on nested arrays then
// let n6=n.flat(3);
// console.log(n6);
// let n7=n6.map(ele=>ele+2);
// console.log(n7);

// &for in and for of

// for(let ele in products)
// {   
//     console.log(ele);
// }

// for(let ele of products)
// {   
//     console.log(ele);
// }

//&array is array and array in array


// let a=[2,3,4]
// let b="Hello"
// let c={a:1,b:2,c:3}

// let p1=Array.isArray(a)
// console.log(p1);

// let p2=Array.isArray(b)
// console.log(p2);

// let p3=Array.isArray(c)
// console.log(p3);

// let p4=Array.from(a)
// console.log(p4);

// let p5=Array.from(b)
// console.log(p5);

// let p6=Array.from(c)
// console.log(p6);


// &set

// let s=[1,4,8,2,9,2,4,6,5,7,2,9,5,3,8,2,9,5,9,0]
// console.log(s);
// let s1=new Set(s)
// console.log(s1);