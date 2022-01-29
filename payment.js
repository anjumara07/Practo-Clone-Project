document.querySelector("#pay").addEventListener("submit",pay)
    
    function pay(event) {
        event.preventDefault()
        var cardnum = document.querySelector("#cardnum").value;
        var name = document.querySelector("#name").value;
        var date = document.querySelector("#date").value;
        var cvv = document.querySelector("#cvv").value;

        if(cardnum == "" || name == "" || date == "" || cvv == "")
        {
            alert("error");
        }
        else if(cvv == 1234){
            alert ("Payment Successful")
            window.location.href = "index.html"
        }
    }