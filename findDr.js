// toggle drop down
let drop_down_banner = document.querySelector("#down");
drop_down_banner.addEventListener("click", dropDown);

function dropDown(event) {
    event.preventDefault();
    document.querySelector("#dropDown").classList.toggle("down");

    let tg = document.querySelectorAll(".remove");
    tg.forEach(function (element) {
        element.classList.toggle("hidden");
    });
}