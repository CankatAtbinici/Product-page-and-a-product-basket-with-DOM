
//User Data Set. Only Admin is defined ---- make a register page and push new ones to userDataSet

const userDataSet = [
    {username: "admin",
    password: "admin"}
]


// a for loop is controling username and password in the userDataSet and get encounter eachother


document.getElementById("submitLogin").addEventListener("click", (e)=> {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    for(let i = 0;i < userDataSet.length; i++ ){
        if(userDataSet[i].username === username){
            if(userDataSet[i].password === password){
                window.location.href="responsive.html";
                break;
            }else{
                alert("invalid password try again")
               
            }
        }else{    
        }
    }
})

