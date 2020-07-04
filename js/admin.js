(function () {
    const loginHolder = document.querySelector("#login-holder");
    loginHolder.addEventListener("submit", (e) => {
        e.preventDefault(); //enter button


        const email = loginHolder["login-email"].value;
        const password = loginHolder["login-password"].value;

        // firebase login
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            document.querySelector("#loginpage").style.display = "none";
            document.querySelector("#changepage").style.display = "block";
        }).catch(error =>
            console.log("nothing"))

    })
})();

var uploader = document.getElementById("uploader");
var chooser = document.getElementById("chooser");


// Listen for file selection
chooser.addEventListener("change", function (e) {
    // Get file
    file = e.target.files[0];

    console.log(file.name);

    output = document.getElementById("foodform");
    var tempurl = URL.createObjectURL(event.target.files[0]);
    output.style.backgroundImage = "url(" + tempurl + ")"
    tempimage = tempurl
    output.onload = function () { // free memory
    }
});

function vals() {
    db.collection(document.getElementsByName("choiced")[0].attributes[1].nodeValue).doc(document.querySelector("#nameform").value)
        .set({
            name: document.querySelector("#nameform").value,
            background: file.name,
            description: document.querySelector("#dessform").value,
            price: document.querySelector("#priceform").value
        })
        .then(function (docRef) {
            var storageRef = firebase.storage().ref("backgrounds/" + file.name);
            // Upload file
            var task = storageRef.put(file);;

            document.querySelector("#priceform").value = ""
            document.querySelector("#dessform").value = ""
            document.querySelector("#nameform").value = ""
            output.style.backgroundImage = "url(/pic/placeholder.jpeg)"
        })
}
function choosecl() {
    document.getElementById("chooser").click(); // Click on the checkbox
}



function selectb() {

    document.querySelector("#breakfast").style.backgroundColor = "#1A2050"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
    document.querySelector("#breakfast").name = "choiced"
    document.querySelector("#lunch").name = ""
    document.querySelector("#children").name = ""
    document.querySelector("#drinks").name = ""
    document.querySelector("#dessert").name = ""
}
function selectl() {

    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#1A2050"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
    document.querySelector("#breakfast").name = ""
    document.querySelector("#lunch").name = "choiced"
    document.querySelector("#children").name = ""
    document.querySelector("#drinks").name = ""
    document.querySelector("#dessert").name = ""
}
function selectc() {

    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#1A2050"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
    document.querySelector("#breakfast").name = ""
    document.querySelector("#lunch").name = ""
    document.querySelector("#children").name = "choiced"
    document.querySelector("#drinks").name = ""
    document.querySelector("#dessert").name = ""
}
function selectdr() {

    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#1A2050"
    document.querySelector("#dessert").style.backgroundColor = "#00073D"
    document.querySelector("#breakfast").name = ""
    document.querySelector("#lunch").name = ""
    document.querySelector("#children").name = ""
    document.querySelector("#drinks").name = "choiced"
    document.querySelector("#dessert").name = ""
}
function selectde() {

    document.querySelector("#breakfast").style.backgroundColor = "#00073D"
    document.querySelector("#lunch").style.backgroundColor = "#00073D"
    document.querySelector("#children").style.backgroundColor = "#00073D"
    document.querySelector("#drinks").style.backgroundColor = "#00073D"
    document.querySelector("#dessert").style.backgroundColor = "#1A2050"
    document.querySelector("#breakfast").name = ""
    document.querySelector("#lunch").name = ""
    document.querySelector("#children").name = ""
    document.querySelector("#drinks").name = ""
    document.querySelector("#dessert").name = "choiced"
}
bmenu = [];
lmenu = [];
cmenu = [];
demenu = [];
drmenu = [];
var tabs = ["breakfast", "lunch", "children", "dessert", "drinks"]

window.addEventListener("DOMContentLoaded", async function updates() {
    await db.collection("breakfast")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                bmenu.push(doc.data())

            })
            var thesection = document.createElement("div")
            thesection.id = "breakfastform"
            thesection.classList.add("menuform")

            var sectiont = document.createElement("h2")
            sectiont.innerText = "Breakfast"

            thesection.appendChild(sectiont)

            document.querySelector("#updateform").appendChild(thesection)
            for (bcount = 0; bcount < bmenu.length; bcount++) {
                var storage = firebase.storage();
                await storageRef
                    .child("backgrounds/" + bmenu[bcount].background)
                    .getDownloadURL()
                    .then(function (url) {
                        var grid = document.createElement("div")
                        grid.classList.add("menusub")
                        grid.id = "breakfast" + bcount
                        grid.style.display = "grid"
                        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr"
                        grid.style.gridTemplateRows = "1fr"
                        grid.style.gridTemplateAreas = '"' + "name desc price image update delete" + '"'
                        grid.name = "breakfast"

                        var name = document.createElement("div")
                        name.classList.add("name")
                        name.innerText = bmenu[bcount].name

                        var desc = document.createElement("input")
                        desc.classList.add("desc")
                        desc.value = bmenu[bcount].description

                        var image = document.createElement("input")
                        image.classList.add("unknown")
                        image.style.display = "none"
                        image.type = "file"
                        image.accept = ".png,.jpg,.gif,.tif,.webp"


                        var fake = document.createElement("div")
                        fake.innerHTML = bmenu[bcount].background
                        fake.classList.add("upimg")
                        fake.setAttribute("onclick", "quest(this)");
                        fake.setAttribute("label", bmenu[bcount].background);

                        var price = document.createElement("input")
                        price.classList.add("price")
                        price.value = bmenu[bcount].price

                        var update = document.createElement("button")
                        update.classList.add("update")
                        update.innerText = "update"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "delete"
                        delet.setAttribute("onclick", "delet(this)");
                        delet.setAttribute("label", bmenu[bcount].background);

                        grid.appendChild(name)
                        grid.appendChild(desc)
                        grid.appendChild(price)
                        grid.appendChild(update)
                        grid.appendChild(delet)
                        grid.appendChild(image)
                        grid.appendChild(fake)

                        document.querySelector("#breakfastform").appendChild(grid)
                    })



            }
        })

    await db.collection("lunch")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                lmenu.push(doc.data())

            })
            var thesection = document.createElement("div")
            thesection.id = "lunchform"
            thesection.classList.add("menuform")

            var sectiont = document.createElement("h2")
            sectiont.innerText = "Lunch"

            thesection.appendChild(sectiont)

            document.querySelector("#updateform").appendChild(thesection)
            for (lcount = 0; lcount < lmenu.length; lcount++) {
                var storage = firebase.storage();
                await storageRef
                    .child("backgrounds/" + lmenu[lcount].background)
                    .getDownloadURL()
                    .then(function (url) {
                        var grid = document.createElement("div")
                        grid.classList.add("menusub")
                        grid.id = "lunch" + lcount
                        grid.style.display = "grid"
                        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr"
                        grid.style.gridTemplateRows = "1fr"
                        grid.style.gridTemplateAreas = '"' + "name desc price image update delete" + '"'
                        grid.name = "lunch"

                        var name = document.createElement("div")
                        name.classList.add("name")
                        name.innerText = lmenu[lcount].name

                        var desc = document.createElement("input")
                        desc.classList.add("desc")
                        desc.value = lmenu[lcount].description

                        var image = document.createElement("input")
                        image.classList.add("unknown")
                        image.style.display = "none"
                        image.type = "file"
                        image.accept = ".png,.jpg,.gif,.tif,.webp"


                        var fake = document.createElement("div")
                        fake.innerHTML = lmenu[lcount].background
                        fake.classList.add("upimg")
                        fake.setAttribute("onclick", "quest(this)");
                        fake.setAttribute("label", lmenu[lcount].background);

                        var price = document.createElement("input")
                        price.classList.add("price")
                        price.value = lmenu[lcount].price

                        var update = document.createElement("button")
                        update.classList.add("update")
                        update.innerText = "update"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "delete"
                        delet.setAttribute("onclick", "delet(this)");
                        delet.setAttribute("label", lmenu[lcount].background);

                        grid.appendChild(name)
                        grid.appendChild(desc)
                        grid.appendChild(price)
                        grid.appendChild(update)
                        grid.appendChild(delet)
                        grid.appendChild(image)
                        grid.appendChild(fake)

                        document.querySelector("#lunchform").appendChild(grid)
                    })



            }
        })

    await db.collection("children")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                cmenu.push(doc.data())

            })
            var thesection = document.createElement("div")
            thesection.id = "childrenform"
            thesection.classList.add("menuform")

            var sectiont = document.createElement("h2")
            sectiont.innerText = "Children"

            thesection.appendChild(sectiont)

            document.querySelector("#updateform").appendChild(thesection)
            for (ccount = 0; ccount < cmenu.length; ccount++) {
                var storage = firebase.storage();
                await storageRef
                    .child("backgrounds/" + cmenu[ccount].background)
                    .getDownloadURL()
                    .then(function (url) {
                        var grid = document.createElement("div")
                        grid.classList.add("menusub")
                        grid.id = "children" + ccount
                        grid.style.display = "grid"
                        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr"
                        grid.style.gridTemplateRows = "1fr"
                        grid.style.gridTemplateAreas = '"' + "name desc price image update delete" + '"'
                        grid.name = "children"

                        var name = document.createElement("div")
                        name.classList.add("name")
                        name.innerText = cmenu[ccount].name

                        var desc = document.createElement("input")
                        desc.classList.add("desc")
                        desc.value = cmenu[ccount].description

                        var image = document.createElement("input")
                        image.classList.add("unknown")
                        image.style.display = "none"
                        image.type = "file"
                        image.accept = ".png,.jpg,.gif,.tif,.webp"


                        var fake = document.createElement("div")
                        fake.innerHTML = cmenu[ccount].background
                        fake.classList.add("upimg")
                        fake.setAttribute("onclick", "quest(this)");
                        fake.setAttribute("label", cmenu[ccount].background);

                        var price = document.createElement("input")
                        price.classList.add("price")
                        price.value = cmenu[ccount].price

                        var update = document.createElement("button")
                        update.classList.add("update")
                        update.innerText = "update"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "delete"
                        delet.setAttribute("onclick", "delet(this)");
                        delet.setAttribute("label", cmenu[ccount].background);

                        grid.appendChild(name)
                        grid.appendChild(desc)
                        grid.appendChild(price)
                        grid.appendChild(update)
                        grid.appendChild(delet)
                        grid.appendChild(image)
                        grid.appendChild(fake)

                        document.querySelector("#childrenform").appendChild(grid)
                    })



            }
        })
    await db.collection("dessert")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                demenu.push(doc.data())

            })
            var thesection = document.createElement("div")
            thesection.id = "dessertform"
            thesection.classList.add("menuform")

            var sectiont = document.createElement("h2")
            sectiont.innerText = "Dessert"

            thesection.appendChild(sectiont)

            document.querySelector("#updateform").appendChild(thesection)
            for (decount = 0; decount < demenu.length; decount++) {
                var storage = firebase.storage();
                await storageRef
                    .child("backgrounds/" + demenu[decount].background)
                    .getDownloadURL()
                    .then(function (url) {
                        var grid = document.createElement("div")
                        grid.classList.add("menusub")
                        grid.id = "dessert" + decount
                        grid.style.display = "grid"
                        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr"
                        grid.style.gridTemplateRows = "1fr"
                        grid.style.gridTemplateAreas = '"' + "name desc price image update delete" + '"'
                        grid.name = "dessert"

                        var name = document.createElement("div")
                        name.classList.add("name")
                        name.innerText = demenu[decount].name

                        var desc = document.createElement("input")
                        desc.classList.add("desc")
                        desc.value = demenu[decount].description

                        var image = document.createElement("input")
                        image.classList.add("unknown")
                        image.style.display = "none"
                        image.type = "file"
                        image.accept = ".png,.jpg,.gif,.tif,.webp"


                        var fake = document.createElement("div")
                        fake.innerHTML = demenu[decount].background
                        fake.classList.add("upimg")
                        fake.setAttribute("onclick", "quest(this)");
                        fake.setAttribute("label", demenu[decount].background);

                        var price = document.createElement("input")
                        price.classList.add("price")
                        price.value = demenu[decount].price

                        var update = document.createElement("button")
                        update.classList.add("update")
                        update.innerText = "update"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "delete"
                        delet.setAttribute("onclick", "delet(this)");
                        delet.setAttribute("label", demenu[decount].background);

                        grid.appendChild(name)
                        grid.appendChild(desc)
                        grid.appendChild(price)
                        grid.appendChild(update)
                        grid.appendChild(delet)
                        grid.appendChild(image)
                        grid.appendChild(fake)

                        document.querySelector("#dessertform").appendChild(grid)
                    })



            }
        })
    await db.collection("drinks")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                drmenu.push(doc.data())

            })
            var thesection = document.createElement("div")
            thesection.id = "drinksform"
            thesection.classList.add("menuform")

            var sectiont = document.createElement("h2")
            sectiont.innerText = "Drinks"

            thesection.appendChild(sectiont)

            document.querySelector("#updateform").appendChild(thesection)
            for (drcount = 0; drcount < drmenu.length; drcount++) {
                var storage = firebase.storage();
                await storageRef
                    .child("backgrounds/" + drmenu[drcount].background)
                    .getDownloadURL()
                    .then(function (url) {
                        var grid = document.createElement("div")
                        grid.classList.add("menusub")
                        grid.id = "drinks" + decount
                        grid.style.display = "grid"
                        grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr"
                        grid.style.gridTemplateRows = "1fr"
                        grid.style.gridTemplateAreas = '"' + "name desc price image update delete" + '"'
                        grid.name = "drinks"

                        var name = document.createElement("div")
                        name.classList.add("name")
                        name.innerText = drmenu[drcount].name

                        var desc = document.createElement("input")
                        desc.classList.add("desc")
                        desc.value = drmenu[drcount].description

                        var image = document.createElement("input")
                        image.classList.add("unknown")
                        image.style.display = "none"
                        image.type = "file"
                        image.accept = ".png,.jpg,.gif,.tif,.webp"


                        var fake = document.createElement("div")
                        fake.innerHTML = drmenu[drcount].background
                        fake.classList.add("upimg")
                        fake.setAttribute("onclick", "quest(this)");
                        fake.setAttribute("label", drmenu[drcount].background);

                        var price = document.createElement("input")
                        price.classList.add("price")
                        price.value = drmenu[drcount].price

                        var update = document.createElement("button")
                        update.classList.add("update")
                        update.innerText = "update"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "delete"
                        delet.setAttribute("onclick", "delet(this)");
                        delet.setAttribute("label", drmenu[drcount].background);

                        grid.appendChild(name)
                        grid.appendChild(desc)
                        grid.appendChild(price)
                        grid.appendChild(update)
                        grid.appendChild(delet)
                        grid.appendChild(image)
                        grid.appendChild(fake)

                        document.querySelector("#drinksform").appendChild(grid)
                    })



            }
        })

})
function quest(x) {

    var choicer = x.parentNode.querySelector(".unknown")
    choicer.click()
    choicer.addEventListener("change", function (e) {
        // Get file
        file = e.target.files[0];

        x.setAttribute("label", file.name)
        x.innerText = file.name
    })
}
function update(e) {

    if (e.parentNode.querySelector(".delete").getAttribute("label") == e.parentNode.querySelector(".upimg").getAttribute("label")) {

        db.collection(e.parentNode.name).doc(e.parentNode.querySelector(".name").innerText)
            .update({
                description: e.parentNode.querySelector(".desc").value,
                price: e.parentNode.querySelector(".price").value
            })
    }
    else {

        db.collection(e.parentNode.name).doc(e.parentNode.querySelector(".name").innerText)
            .update({
                description: e.parentNode.querySelector(".desc").value,
                price: e.parentNode.querySelector(".price").value,
                background: e.parentNode.querySelector(".upimg").getAttribute("label")
            })
        storageRef.child("backgrounds/" + e.parentNode.querySelector(".delete").getAttribute("label")).delete()

        var filt = e.parentNode.querySelector(".unknown").files[0]

        var storagechange = firebase.storage().ref("backgrounds/" + filt.name);
        // Upload file
        var task = storagechange.put(filt);

    }
}

function delet(e) {
    db.collection(e.parentNode.name).doc(e.parentNode.querySelector(".name").innerText).delete()
    storageRef.child("backgrounds/" + e.value).delete()
    e.parentNode.display = "none"
}

