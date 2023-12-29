let UserDetails=document.getElementById("UserDetails")
console.log(UserDetails);

let users=fetch("https://api.github.com/users")
console.log(users);

let userdata;

users.
then((data)=>
{
    // console.log(data);  //response object
    // console.log(data.json());  //pending promise inside fullfilled

    return data.json()
}).
then((userdata)=>
{
    userdata.map(({id,login,avatar_url},index)=>
{
    UserDetails.innerHTML+=
    `
    <tr>
        <td>${index+1}</td>
        <td>${login}</td>
        <td id="img">
            <img src="${avatar_url}" alt="">
        </td>
    </tr>
    `
})
})




// userobj.map(({id,login,avatar_url},index)=>
// {
//     UserDetails.innerHTML+=
//     `
//     <tr>
//         <td>${index+1}</td>
//         <td>${login}</td>
//         <td id="img">
//             <img src="${avatar_url}" alt="">
//         </td>
//     </tr>
//     `
// })