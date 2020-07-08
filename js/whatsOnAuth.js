//listen for auth changes
auth.onAuthStateChanged(user => {

    //get data
    db.collection('events').onSnapshot(snapshot => {
        setupEvents(snapshot.docs);
        setupUI(user);
    })

})



//create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('events').add({
        title: createForm['title'].value,
        info: createForm['info'].value,
    }).then(() => {
        //close modal and clear form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset()
    }).catch(err => {
        console.log(err.message)
    })
})



//auth
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();



    //get user info
    const email = signupForm['singup-email'].value;
    const password = signupForm['signup-password'].value;

    //Sign up user

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(email).set({
            bio: signupForm['signup-about'].value,
            type: "user"
        })
    }).then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset()
    })
})



//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})

//login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset()
    })
})