const generateNumber = document.getElementById("generate-number")

function sortition() {
    let inputMin = Math.ceil(document.getElementById("input-min").value)
    let inputMax = Math.floor(document.getElementById("input-max").value)

    if (inputMin >= inputMax) {
        alert("O valor mínimo precisa ser MENOR que o valor máximo")
    }

    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    alert(result)
}

generateNumber.addEventListener("click", sortition)