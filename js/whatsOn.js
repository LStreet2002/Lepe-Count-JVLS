const eventList = document.querySelector('.events');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');




//set up materialise modals
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);


});


const setupUI = (user) => {
    if (user) {
        //account info
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
            <div>Logged in as ${user.email}</div>
            <div>${doc.data().bio}</div>
            `;
            accountDetails.innerHTML = html;
        })

        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        //hide account info
        accountDetails.innerHTML = '';
        //toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}



const setupEvents = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const event = doc.data();
            const li = `
            <div class="eventDiv">
            <h1 class="eventTitle">${event.title}</h1>
            <p class="eventInfo">${event.info}</p>
            <button class="signUpBox btn" id="button">
                <h1 class="signUpTxt">Book</h1>
            </button>
            </div>
            <div class="line2"></div>
           
        
    `;
            html += li
        });

        eventList.innerHTML = html;
    } else {
        eventList.innerHTML = '<h5>Login to view events</h5>'
    }

}