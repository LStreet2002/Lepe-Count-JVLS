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