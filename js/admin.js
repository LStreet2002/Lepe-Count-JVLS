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