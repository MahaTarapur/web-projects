// // let numbers=[1,3,54,16,[35,7],73,69,[9,6],95,34,2]
// // console.log(numbers);
// // let res=numbers.flatMap(ele=>ele+2)
// // console.log(res);

// // let res1=numbers.map(ele=>ele+2)
// // console.log(res1);

// // let res2=numbers.flatMap(ele=>ele).map(ele=>ele+2)
// // console.log(res2);


// // let colors=["red","blue","green","yello","orange","purple"]
// // for(let i in colors)
// // {
// //     console.log(i);
// // }

// // for(let element of colors)
// // {
// //     console.log(element);
// // }

// // console.log(Array.isArray(colors));

// let s="javascript"

// console.log(s.split());
// console.log(Array.from(s));

// let numbers=[1,2,4,2,6,3,2,8,3,8,2,9,2]
// console.log(numbers)
// let res= new Set(numbers)
// console.log(res);
// // console.log(res.sort());
// let number=Array.from(numbers)
// console.log(numbers.sort());

// let a={name:"maha",age:23}
// console.log(a);
// a.dept="cse"
// console.log(a);
// a['hobby']="Cooking"
// console.log(a);
// a[`address`]=`Gulbarga`
// console.log(a);

// & MAP AND FLAT MAP
// let numbers=[21,8,91,[80,4,[82,7],64],69,70]
// console.log(numbers);
// let res=numbers.flatMap(ele=>ele)
// console.log("flatMap",res);

// let re=numbers.flatMap(ele=>ele+2)
// console.log("flatMapwithoperation",re);

// let r=numbers.flatMap(ele=>
//     {
//         console.log(ele);
//         return ele+2
//     });
// console.log(r);

// console.log("-------------------------------------------------------------------------");
// let res1=numbers.flatMap(ele=>ele).map(ele=>ele+2)
// console.log("FlatMap+map",res1);

// console.log("---------------document.getElementById----------------");

// let res1=document.getElementById("demo")
// console.log(res1);
// let res2=document.getElementById("test")
// console.log(res2);
// let res3=document.getElementById("maha")
// console.log(res3);

// console.log("---------------document.querySelector----------------");


// let out1=document.querySelector("a")
// console.log(out1);
// let out2=document.querySelector("div a")
// console.log(out2);
// let out3=document.querySelector("h1")
// console.log(out3);
// let out4=document.querySelector("span")
// console.log(out4);
// let out5=document.querySelector("maha")
// console.log(out5);

// console.log("---------------document.querySelectorAll----------------");

// let get1=document.querySelectorAll("a")
// console.log(get1);
// let get2=document.querySelectorAll("h1")
// console.log(get2);
// let get3=document.querySelectorAll("div a")
// console.log(get3);
// let get4=document.querySelectorAll("#demo")
// console.log(get4);
// let get5=document.querySelectorAll(".try")
// console.log(get5);
// let get6=document.querySelectorAll("maha")
// console.log(get6);

// console.log("---------------document.getElementsByClassName----------------");

// let shw1=document.getElementsByClassName("try")
// console.log(shw1);
// let shw2=document.getElementsByClassName("chk")
// console.log(shw2);
// let shw3=document.getElementsByClassName("maha")
// console.log(shw3); 

// console.log("---------------document.getElementByTagName----------------");

// let show1=document.getElementsByTagName("a")
// console.log(show1);
// let show2=document.getElementsByTagName("h1")
// console.log(show2);
// let show3=document.getElementsByTagName("#demo")
// console.log(show3);

// console.log("---------Adding or getting Attributes--------");

// let input=document.querySelector("input")
// console.log(input);
// console.log(input.type);
// console.log(input.minLength);

// input.minLength="8"  // if minlenth is not there it adds the minlenth as weell as its value 
// // if minlenth is already present it updates the minlenth to 8
// // input.required={}
// input.setAttribute("required",{})


// let student={
//     sname:"Rajkumar",
//     age:31,
//     marks:{
//         maths:230,
//         science:200
//         },
//     address:{
//         city:"Banglore",
//         state:"Karnataka",
//         pin:560049,
//         mobile:{
//             personal:9826452791,
//             official:9123821911
//             }
//         }
//     }

//     console.log(student);

//     let jsonStudent=JSON.stringify(student)
//     console.log(jsonStudent);
//     let objStudent=JSON.parse(jsonStudent)
//     console.log(objStudent);

// function add(a ,b ,c ,d,...e)
// {
//     console.log(a,b,c,d,e);
// }

// add(1,2,3,4,5,6,7)

// let colors=["red","pink","yellow","orange"]

// let [r,p,y,o]=colors
// console.log(r,p,y,o);

// let getcolors=([r,p,y,o])=>
// {
//     console.log(r,p,y,o);
// }
// getcolors(colors)

// let student={sname:"syed",age:31,dept:"cse",gender:"male",marks:650}

// console.log(student);

// let sname=student.sname
// console.log(sname);

// let {gender,sname,marks}=student
// console.log(gender,sname,marks);

// console.log(student);
// let {gender,age,marks,...details}=student
// console.log(age,gender,marks,details);

// let getStudentData=({sname,age,dept,gender,marks})=>
// {
//     console.log(sname,age,dept,gender,marks);
// }
// getStudentData(student)

// let getStudentData=()=>
// {
//     return{sname:"syed",age:31,dept:"cse",gender:"male",marks:"640"}
// }

// let{sname,age,marks}=getStudentData()
// console.log(sname,age,marks);

// let student={
//     sname:"syed",
//     age:31,
//     marks:560,
//     address:{
//         home:{city:"Banglore",state:"Karnataka"},
//         work:{city:"Mumbai"}
//             }
//             }

// console.log(student);
// let{sname,address}=student
// let{home,work}=address
// let{city,state}=home
// let{city:newCity}=work

// console.log(address,work,state);

// let {sname,address:{home:{city,state},work:{city:newCity}}}=student;
// console.log(sname,city,state,newCity);

// let students=
// [
//     {
//         sname:"syed",
//         age:36,
//         marks:360
//     },
//     {
//         sname:"John",
//         age:26,
//         marks:460
//     }
// ]

// for(let {sname,age,marks} of students)
// {
//     console.log(sname,age,marks);
// }

// let res=students.map(({sname})=>
// {
//     return sname.toLocaleUpperCase()
// })
// console.log(res);

// let student=
// {
//     sname:"syed",
//     age:31,
//     marks:560
// }

// console.log(student);
// console.log(Object.values(student));
// console.log(Object.keys(student));
// console.log(Object.entries(student));
// console.log(Object.keys(student).length);
// console.log(student.hasOwnProperty("sname"));
// console.log(student.hasOwnProperty("details"));

// // Object.freeze(student)
// Object.seal(student)

// student.dept="cse"
// student.marks=200;
// console.log(student);
// // delete student.sname;

// console.log(Object.isFrozen(student));
// console.log(Object.isSealed(student));


// let student=
// {
//     sname:"syed",
//     age:31,
//     marks:560
// }

// let employee=
// {
//     sname:"syed",
//     age:31,
//     marks:560
// }

// let worker=student
// console.log(student);
// student.mao="mao"
// console.log(student);

// console.log(Object.is(student,employee));
// console.log(Object.is(worker,student));
// console.log(Object.is(employee,worker));
// console.log(Object.is(student,student));
// console.log(Object.is(employee,employee));
// console.log(Object.is(worker,worker));



// let newObj=Object.create(student)
// console.log(newObj);
// console.log((newObj.sname));
// console.log((newObj.age));
// console.log((newObj.marks));
// student.age=300
// student.dream="dream"
// console.log((newObj.sna));
// console.log(Object.is(student,newObj));
// console.log(student);
// console.log(newObj);


// let student=
// {
//     sname:"syed",
//     age:31,
//     marks:560
// }

// let employee=
// {
//     sname:"Ram",
//     salary:560000
// }

// console.log(student);
// console.log(employee);
// let newObj=Object.assign(student,employee)
// console.log("newobj",newObj);
// console.log("student",student);
// console.log("employee",employee);
// student.height=5.3
// newObj.hobby="singing"
// console.log("employee",employee);
// console.log("newobj",newObj);
// console.log("student",student);
// console.log(Object.is(student,newObj));



// let newObj1=Object.assign({},student,employee);
// employee.city="Bidar"
// student.dream="Disney"
// console.log("stu",student);
// console.log("emp",employee);
// console.log("newobj",newObj1);
// console.log(student===newObj1);
// console.log(student===employee);

// let colors=["red","pink"]
// console.log(colors);
// let speed=[...colors]
// console.log("speed",speed);
// let slice=colors.slice()
// console.log("slice",slice);
// let map=colors.map(ele=>ele)
// console.log("map",map);
// let filter=colors.filter(ele =>ele)
// console.log("filter",filter);
// let concat=colors.concat()
// console.log("concat",concat);
// let splice=colors.splice(0)
// console.log("splice",splice);

// let input=document.querySelector("input")
// console.log(input);
// console.log(input.type);
// input.type="password"
// console.log(input.type);
// input.size="8"
// console.log(input);

// let input=document.querySelector("input")
// console.log(input.getAttribute("type"));
// input.setAttribute("type","Number")
// console.log(input.getAttribute("type"));

// let demo=document.getElementById("demo")
// console.log(demo);

// & inline css
// demo.style.backgroundColor="pink"
// demo.style.color="blue"
// demo.style.fontSize="20px"
// demo.style.fontWeight="Bold"
// console.log(demo);


// demo.style.cssText=`
// background-color:red;
// color:yellow;
// font-size:25px;
// font-style:italic;
// text-decoration: underline;
// `

// let demo=document.getElementById("demo")
// console.log(demo);

// demo.className="bg-color"
// demo.className+=" font-design"

// demo.classList.add("bg-color")
// demo.classList.add("font-design")

// demo.classList.remove("bg-color")
// demo.classList.remove("font-design")

// demo.classList.add("dummy")

// demo.classList.toggle("dummy")

// let a
// let b
// let add=()=>
// {console.log(a)
// console.log(a+b)}

//     add()

// console.log(add());

console.log(m1);
const  m1=function()
{
    console.log("M1");
}
console.log(m1());







