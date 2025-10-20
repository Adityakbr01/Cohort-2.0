const button = document.querySelector('button');
const body = document.querySelector('body');


button.addEventListener("click", () => {
    button.style.backgroundColor = button.style.backgroundColor === "green" ? "red" : "green";
    body.style.backgroundColor = body.style.backgroundColor === "purple" ? "blue" : "purple";
})