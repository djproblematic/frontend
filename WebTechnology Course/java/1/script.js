let papich = document.getElementById("compare")

function toUpper() {
    let input = document.getElementById("kasanova")
    input.value = input.value.trim().charAt(0).toUpperCase() + input.value.trim().slice(1, input.value.length)
    let neinput = document.getElementById("serzeed")
    neinput.value = neinput.value.trim().charAt(0).toUpperCase() + neinput.value.trim().slice(1, neinput.value.length)
}

function golosniValue() {
    let input = document.getElementById("kasanova")
    let counter = 0
    let golosniliteru = "aueio"
    for (let i = 0; i < golosniliteru.length; i++) {
        if (input.value.indexOf(golosniliteru[i])!= -1) {
            counter = counter + 1
        }
    }
    console.log(counter)
}

papich.addEventListener("click", function () {
    let kasanova = document.getElementById("kasanova")
    kasanova.value.length
    let serzeed = document.getElementById("serzeed")
    serzeed.value.length

    if (kasanova.value.length > serzeed.value.length) {
        kasanova.style.background = "green"
        serzeed.style.background = "white"
    }
    else if (serzeed.value.length > kasanova.value.length) {
        serzeed.style.background = "green"
        kasanova.style.background = "white"
    }
    toUpper()
    golosniValue()
}
)