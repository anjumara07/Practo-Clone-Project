document.querySelector("button").addEventListener("click",signIn);
var usersdetail = JSON.parse(localStorage.getItem("userData"));

function signIn()
{
    var email = document.querySelector("#numEmail").value;
    var password = document.querySelector("#pass").value;
    flag = false;
    if(email=="admin" && password=="admin"){
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        window.location.href = "admin.html" ;
        alert("Successfully Login");
    }
    else {
        for(var i=0 ; i<usersdetail.length ; i++)
        {
            if(usersdetail[i].email===email && usersdetail[i].password===password && email!=="" && password!==""){
                document.querySelector("#numEmail").value = "";
                document.querySelector("#pass").value = "";
                window.location.href = "landing_page.html";
                flag = true;
                break;
            }
        }
        if(flag)
        {
            alert("Successfully Login");
        }
        else{
            alert("Your Email Or Password Invalid");
        }
    }
}