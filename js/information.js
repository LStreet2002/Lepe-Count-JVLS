var moners = []

window.addEventListener("DOMContentLoaded", async function () {
    await db.collection("comission")
        .get()
        .then(async function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                moners.push(doc.data())
            })
            console.log(moners)
            document.querySelector(".parkingp").innerHTML = "October to March<br><br>Up to 1 hour " + moners[0].onehour + "<br>Up to 2 hours " + moners[0].onehour
                + "<br>Up to 4 hours " + moners[0].fourhour + "<br>Full day " + moners[0].fullday + "<br><br>April to September<br><br>Up to 1 hour " + moners[1].onehour
                + "<br> Up to 2 hours " + moners[1].twohour + "<br>Up to 4 hours " + moners[1].fourhour + "<br>Full day " + moners[1].fullday
        })
})
