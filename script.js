let screen = document.querySelector(".screen");

let items = document.querySelectorAll(".item");
let itemAns = document.querySelector(".itemAns");
let clear = document.querySelector(".clear");
items.forEach((element) => {
    element.addEventListener("click", () => {
        screen.innerText = screen.innerText + element.innerText;
    })
})

itemAns.addEventListener("click", () => {
    try {

        let ans = eval(screen.innerText);
        screen.innerText = ans.toString();
    }
    catch (error) {
        screen.innerText = "Syntax Error";
    }
})

clear.addEventListener("click", () => {
    screen.innerText = "";
})