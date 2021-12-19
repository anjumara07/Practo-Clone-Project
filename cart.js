
// var count = 1
var data = JSON.parse(localStorage.getItem("cartData")) || [];
// console.log(data)


let cart_total = 0
display_product(data);

function display_product(data) {
    document.querySelector('#cartLen').innerHTML = data.length
    cart_total = data.reduce(function (ac, cv) {
        return ac + (cv.price * cv.qty);
    }, 0).toFixed(2);

    document.querySelector('#total').innerHTML = "Payable Amount: ₹" + cart_total

    document.querySelector("#cartItm").innerHTML = "";

    data.map(function (elem) {
        // creating elements and setting attributes

        // main container
        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "flex");

        // for product image
        var smallDiv = document.createElement("div");
        smallDiv.setAttribute("class", "flex1");
        var img = document.createElement("img");
        img.setAttribute("src", elem.image);

        // for product description and name
        var details = document.createElement("div");
        var h2 = document.createElement("h2");
        var p = document.createElement("p");

        // for product price and quantity
        var pricing = document.createElement("div");
        var h3 = document.createElement("h3");
        var p1 = document.createElement("p");

        // quantity div
        var quantityMain = document.createElement("div");
        quantityMain.setAttribute("class", "grid")
        var dec = document.createElement("div");
        dec.setAttribute("class", "border");
        dec.addEventListener('click', decCount)
        var quantity = document.createElement("div");
        quantity.setAttribute("class", "qty");
        var inc = document.createElement("div");
        inc.setAttribute("class", "border");
        inc.addEventListener('click', incCount)

        // giving content to the elements from the arr
        h2.textContent = elem.name;
        h3.textContent = "₹" + elem.price;
        p.textContent = elem.description;
        // p1.textContent = 5;
        dec.innerHTML = "-";
        inc.innerHTML = "+";
        quantity.innerHTML = +elem.qty

        // appending the child elements with the parent elements
        details.append(h2, p);
        smallDiv.append(img, details);

        // quantity
        quantityMain.append(dec, quantity, inc)

        pricing.append(h3, quantityMain);
        mainDiv.append(smallDiv, pricing);
        // mainDiv.style.height = "70%"
        document.querySelector("#cartItm").append(mainDiv);
    });

    // function for decreasing the quantity of a particular item
    function decCount(event) {
        event.preventDefault();

        let target = event.target.parentNode.children[1]
        let target_name = (target.parentNode.parentNode.parentNode.children[0].children[1].children[0].textContent)

        console.log(target)
        if (target.textContent == 1) {
            data = data.filter(function (element) {
                return element.name != target_name
            })

            localStorage.setItem('cartData', JSON.stringify(data))
            if (data.length == 0) {
                // document.querySelector("#cartItm").innerHTML = "";
            }
            display_product(data)
            
        }
        else {
            let res = target.innerHTML
            res = +res - 1

            data.forEach(function (element) {
                if (element.name == target_name) {
                    element.qty = res
                    // console.log(data)
                }
            })

            target.innerHTML = res;
            localStorage.setItem('cartData', JSON.stringify(data))
            display_product(data)
        }

    }

    // function for increasing the quantity of a particular item

    function incCount(event) {
        event.preventDefault();
        let target = event.target.parentNode.children[1]
        let target_name = (target.parentNode.parentNode.parentNode.children[0].children[1].children[0].textContent)
        let res = target.innerHTML
        res = +res + 1

        data.forEach(function (element) {
            if (element.name == target_name) {
                element.qty = res
                console.log(data)
            }
        })

        target.innerHTML = res;
        localStorage.setItem('cartData', JSON.stringify(data))
        display_product(data)
    }

}

// checkout function
function next() {
    localStorage.setItem('cartTotal', cart_total)
    window.location.href = "checkout.html";

}
