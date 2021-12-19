document.querySelector("button").addEventListener("click",login)

    function login()
    {
        var otp = document.querySelector("#otp").value;
        if(otp == "")
        {
            alert ("Error")
        }
        else if(otp == 123456)
        {
            window.location.href = "payment.html"
        }
        else{
            alert ("Enter valid OTP")
        }
    }