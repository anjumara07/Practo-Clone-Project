document.querySelector("button").addEventListener("click",signUp);
var userData = JSON.parse(localStorage.getItem("userData")) || [];

function signUp()
{
    var numEmail = document.querySelector("#numEmail").value;
    var number = document.querySelector("#num").value;
    var password = document.querySelector("#pass").value;

    document.querySelector("#numEmail").value = "";
    document.querySelector("#num").value = "";
    document.querySelector("#pass").value = "";

    var userDetail = {
        email : numEmail,
        number : number,
        password :password,
    }
    
    userData.push(userDetail);
    localStorage.setItem("userData",JSON.stringify(userData));
    alert("OTP 1234")
    window.location.href = "login.html";
}