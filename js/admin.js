firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(function () {
        (function () {
            const loginHolder = document.querySelector("#login-holder");
            loginHolder.addEventListener("submit", async (e) => {
                e.preventDefault(); //enter button


                const email = loginHolder["login-email"].value;
                const password = loginHolder["login-password"].value;

                var usersRef = db.collection("users");
                var docRef = usersRef.doc(email)

                await docRef.get().then(function (doc) {
                    if (doc.exists) {
                        usr = doc.data()
                    }
                })
                switch (usr.type) {
                    case "admin":
                        // firebase login
                        auth.signInWithEmailAndPassword(email, password).then((cred) => {
                            document.querySelector("#loginpage").style.display = "none";
                            document.querySelector("#changepage").style.display = "block";
                        }).catch(error => document.querySelector("#login").style.backgroundColor = "red",
                            setTimeout(() => { document.querySelector("#login").style.backgroundColor = "#04B8D0" }, 1500));

                        break;
                    case "user":
                        document.querySelector("#login").style.backgroundColor = "red",
                            setTimeout(() => { document.querySelector("#login").style.backgroundColor = "#04B8D0" }, 1500);
                        break;
                    default:
                        document.querySelector("#login").style.backgroundColor = "red",
                            setTimeout(() => { document.querySelector("#login").style.backgroundColor = "#04B8D0" }, 1500);
                }
            })
        })();
    })
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });


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
    var user = firebase.auth().currentUser;
    if (user) {

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
                document.querySelector("#breakfast").style.backgroundColor = "#00073D"
                document.querySelector("#lunch").style.backgroundColor = "#00073D"
                document.querySelector("#children").style.backgroundColor = "#00073D"
                document.querySelector("#drinks").style.backgroundColor = "#00073D"
                document.querySelector("#dessert").style.backgroundColor = "#00073D"
                document.querySelector("#breakfast").name = ""
                document.querySelector("#lunch").name = ""
                document.querySelector("#children").name = ""
                document.querySelector("#drinks").name = ""
                document.querySelector("#dessert").name = ""
            })
    }
    else {
        document.querySelector("#loginpage").style.display = "block";
        document.querySelector("#changepage").style.display = "none";
    }
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
                        update.innerText = "UPDATE"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "DELETE"
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
                        update.innerText = "UPDATE"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "DELETE"
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
                        update.innerText = "UPDATE"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "DELETE"
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
                        update.innerText = "UPDATE"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "DELETE"
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
                        update.innerText = "UPDATE"
                        update.setAttribute("onclick", "update(this)");

                        var delet = document.createElement("button")
                        delet.classList.add("delete")
                        delet.innerText = "DELETE"
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
    var user = firebase.auth().currentUser;

    if (user) {
        choicer.click()
    }
    else {
        document.querySelector("#loginpage").style.display = "block";
        document.querySelector("#changepage").style.display = "none";
    }
    choicer.addEventListener("change", function (e) {


        // User is signed in.
        // Get file
        file = e.target.files[0];

        x.setAttribute("label", file.name)
        x.innerText = file.name

    });



}
function update(e) {
    var user = firebase.auth().currentUser;
    if (user) {


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
    else {
        document.querySelector("#loginpage").style.display = "block";
        document.querySelector("#changepage").style.display = "none";
    }
}

function delet(e) {
    var user = firebase.auth().currentUser;
    if (user) {

        db.collection(e.parentNode.name).doc(e.parentNode.querySelector(".name").innerText).delete()
        storageRef.child("backgrounds/" + e.value).delete()
        e.parentNode.display = "none"
    }
    else {
        document.querySelector("#loginpage").style.display = "block";
        document.querySelector("#changepage").style.display = "none";
    }
}

var usr = ""

var comission = []

window.addEventListener("DOMContentLoaded", async function () {
    await db.collection("comission")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                comission.push(doc.data())

            })
            for (var i = 0; i < comission.length; i++) {
                var priceg = document.createElement("div")
                priceg.classList.add("priceg")

                var time = document.createElement("h2")
                time.innerHTML = comission[i].season
                time.classList.add("time")

                var onehour = document.createElement("div")
                onehour.innerText = "1 hour"
                onehour.classList.add("onehour")

                var priceone = document.createElement("input")
                priceone.value = comission[i].onehour
                priceone.classList.add("priceone")
                priceone.setAttribute("name", "onehour")

                var twohour = document.createElement("div")
                twohour.innerText = "2 hours"
                twohour.classList.add("twohour")

                var pricetwo = document.createElement("input")
                pricetwo.value = comission[i].twohour
                pricetwo.classList.add("pricetwo")
                pricetwo.setAttribute("name", "twohour")

                var fourhour = document.createElement("div")
                fourhour.innerText = "4 hours"
                fourhour.classList.add("fourhour")

                var pricefour = document.createElement("input")
                pricefour.value = comission[i].fourhour
                pricefour.classList.add("pricefour")
                pricefour.setAttribute("name", "fourhour")

                var full = document.createElement("div")
                full.innerText = "Full day"
                full.classList.add("fullday")

                var pricefull = document.createElement("input")
                pricefull.value = comission[i].fullday
                pricefull.classList.add("pricefull")
                priceone.setAttribute("name", "fullday")

                var updet = document.createElement("div")
                updet.classList.add("updet")
                updet.innerText = "UPDATE"
                updet.setAttribute("onclick", "priceup(this)")

                priceg.appendChild(onehour)
                priceg.appendChild(priceone)
                priceg.appendChild(twohour)
                priceg.appendChild(pricetwo)
                priceg.appendChild(fourhour)
                priceg.appendChild(pricefour)
                priceg.appendChild(full)
                priceg.appendChild(pricefull)
                priceg.appendChild(updet)
                priceg.appendChild(time)

                document.querySelector("#updatecomission").appendChild(priceg)
            }
        })
})
function priceup(l) {
    db.collection("comission").doc(l.parentNode.querySelector(".time").innerText)
        .update({
            onehour: l.parentNode.querySelector(".priceone").value,
            twohour: l.parentNode.querySelector(".pricetwo").value,
            fourhour: l.parentNode.querySelector(".pricefour").value,
            fullday: l.parentNode.querySelector(".pricefull").value
        })
    console.log("it doing")
}