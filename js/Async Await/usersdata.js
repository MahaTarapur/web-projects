async function getUserData()
{

    try
    {
        let users=await fetch("https://api.github.com/users")
        users=await users.json()
        users.map(({avatar_url})=>
        {
            document.body.innerHTML+=`
            <img src=${avatar_url} height=200px width=150px/>
            `
        })
    }
    catch(err)
    {
        console.log(err.message);
    }
}
getUserData()