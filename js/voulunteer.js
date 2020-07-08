const jobList = document.querySelector('.jobDiv');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

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

//setup guides
const setupJobs = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const job = doc.data();
            const li = `
            
            <h1 class="title">${job.title}</h1>
            <h1 class="duration">${job.duration}</h1>
            <p class="info">${job.info}</p>
            <h1 class="hours">${job.hours}</h1>
            <div class="applyBox">
                <h1 class="applyTxt">Apply</h1>
            </div>
            <div class="line2"></div>
        
    `;
            html += li
        });

        jobList.innerHTML = html;
    } else {
        jobList.innerHTML = '<h5>Login to view jobs</h5>'
    }

}



//set up materialise modals
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);


});