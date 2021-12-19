document.querySelector("button").addEventListener("click",getotp)

      function getotp()
      {
          var number = document.querySelector("#otp").value;
          if(number=="")
          {
              alert("error Enter valid number")
          }
          else{
              window.location.href = "otp.html"
              alert ("123456 is the OTP for accessing your Practo account")
          }
      }