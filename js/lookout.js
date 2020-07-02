

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
bmenu = [];
lmenu = [];
cmenu = [];
document.addEventListener("DOMContentLoaded", async function test() {
    db.collection("breakfast")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                bmenu.push(doc.data())
            })
            for (bcount = 0; bcount < bmenu.length; bcount++) {
                var storage = firebase.storage();
                await storageRef
                    .child("backgrounds/" + bmenu[bcount].background)
                    .getDownloadURL()
                    .then(function (url) {
                        var carousel = document.createElement("div")
                        carousel.classList.add("carousel-item", "white-text")
                        carousel.style.backgroundImage = "url(" + url + ")"
                        carousel.href = "one#!"

                        var name = document.createElement("div")
                        name.classList.add("foodname")

                        var naa = document.createElement("p")
                        naa.classList.add("naa")
                        naa.innerText = bmenu[bcount].name

                        var foodesc = document.createElement("div")
                        foodesc.classList.add("foodesc")

                        var dess = document.createElement("p")
                        dess.classList.add("dess")
                        dess.innerHTML = bmenu[bcount].description + "<br>" + bmenu[bcount].price

                        name.appendChild(naa)
                        foodesc.appendChild(dess)
                        carousel.appendChild(name)
                        carousel.appendChild(foodesc)

                        document.querySelector("#bcar").appendChild(carousel)
                    })
            }


            db.collection("children")
                .get()
                .then(async function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        cmenu.push(doc.data())
                    })
                    for (ccount = 0; ccount < cmenu.length; ccount++) {
                        var storage = firebase.storage();
                        await storageRef
                            .child("backgrounds/" + cmenu[ccount].background)
                            .getDownloadURL()
                            .then(function (url) {
                                var carousel = document.createElement("div")
                                carousel.classList.add("carousel-item", "white-text")
                                carousel.style.backgroundImage = "url(" + url + ")"
                                carousel.href = "one#!"

                                var name = document.createElement("div")
                                name.classList.add("foodname")

                                var naa = document.createElement("p")
                                naa.classList.add("naa")
                                naa.innerText = cmenu[ccount].name

                                var foodesc = document.createElement("div")
                                foodesc.classList.add("foodesc")

                                var dess = document.createElement("p")
                                dess.classList.add("dess")
                                dess.innerHTML = cmenu[ccount].description + "<br>" + cmenu[ccount].price

                                name.appendChild(naa)
                                foodesc.appendChild(dess)
                                carousel.appendChild(name)
                                carousel.appendChild(foodesc)

                                document.querySelector("#ccar").appendChild(carousel)
                            })
                    }

                    db.collection("lunch")
                        .get()
                        .then(async function (querySnapshot) {
                            querySnapshot.forEach(function (doc) {
                                // doc.data() is never undefined for query doc snapshots
                                lmenu.push(doc.data())
                            })
                            for (lcount = 0; lcount < lmenu.length; lcount++) {
                                var storage = firebase.storage();
                                await storageRef
                                    .child("backgrounds/" + lmenu[lcount].background)
                                    .getDownloadURL()
                                    .then(function (url) {

                                        var carousel = document.createElement("div")
                                        carousel.classList.add("carousel-item", "white-text")
                                        carousel.style.backgroundImage = "url(" + url + ")"
                                        carousel.href = "one#!"

                                        var name = document.createElement("div")
                                        name.classList.add("foodname")

                                        var naa = document.createElement("p")
                                        naa.classList.add("naa")
                                        naa.innerText = lmenu[lcount].name

                                        var foodesc = document.createElement("div")
                                        foodesc.classList.add("foodesc")

                                        var dess = document.createElement("p")
                                        dess.classList.add("dess")
                                        dess.innerHTML = lmenu[lcount].description + "<br>" + lmenu[lcount].price

                                        name.appendChild(naa)
                                        foodesc.appendChild(dess)
                                        carousel.appendChild(name)
                                        carousel.appendChild(foodesc)

                                        document.querySelector("#lcar").appendChild(carousel)
                                    })
                            }






                            var elems = document.querySelectorAll('.carousel');
                            var instance = M.Carousel.init(elems, {
                                fullWidth: true,
                                indicators: true

                            })
                        })
                });
        })
})
