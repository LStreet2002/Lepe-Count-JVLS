var bdiv = document.querySelector("#bdiv")
var ldiv = document.querySelector("#ldiv")
var cdiv = document.querySelector("#cdiv")
var dediv = document.querySelector("#dediv")
var drdiv = document.querySelector("#drdiv")


function breakfast() {
    bdiv.style.display = "block"
    ldiv.style.display = "none"
    cdiv.style.display = "none"
    dediv.style.display = "none"
    drdiv.style.display = "none"
    document.querySelector("#breakfast").style.backgroundColor = "#1A2050"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
}
function lunch() {
    bdiv.style.display = "none"
    ldiv.style.display = "block"
    cdiv.style.display = "none"
    dediv.style.display = "none"
    drdiv.style.display = "none"
    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#1A2050"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
}
function child() {
    bdiv.style.display = "none"
    ldiv.style.display = "none"
    cdiv.style.display = "block"
    dediv.style.display = "none"
    drdiv.style.display = "none"
    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#1A2050"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
}
function drinks() {
    bdiv.style.display = "none"
    ldiv.style.display = "none"
    cdiv.style.display = "none"
    dediv.style.display = "none"
    drdiv.style.display = "block"
    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#1A2050"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
}
function dessert() {
    bdiv.style.display = "none"
    ldiv.style.display = "none"
    cdiv.style.display = "none"
    dediv.style.display = "block"
    drdiv.style.display = "none"
    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#1A2050"
}
