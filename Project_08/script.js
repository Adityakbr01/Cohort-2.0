const ul = document.querySelector("#unorderls")
const input = document.querySelector("#listInput")
const button = document.querySelector("#addButton")





button.addEventListener("click", () => {
    // const inputData = input.value;


    // const li = document.createElement("li")
    // li.textContent = inputData

    // ul.appendChild(li)


    //Add Basic data checks
    const dataInput = input.value.trim()

    const li = document.createElement("li")
    li.textContent = dataInput

    if (dataInput != "" || li.textContent.length > 0) {
        ul.appendChild(li)
        input.value = ""
        alert("Item added successfully")
    } else {
        alert("Please enter valid data")
    }

})