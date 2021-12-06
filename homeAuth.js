
const logout = document.querySelector('#logout')

logout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(()=> {
        console.log('user log out')
    })
})
const userName = document.querySelector('#userName')
const nameWrapper = document.querySelector('.name-wrapper')
// const auth = firebase.auth();
auth.onAuthStateChanged(user => {
    if(user){
        // window.location.href = "/index.html"
        db.collection('users').doc(user.uid).get().then(doc => {
            const nameHtml =  `
                <div data-font class="name"> ${doc.data().name} </div>
            `
            userName.innerHTML = nameHtml

            const nameAndEmail = `
                <h3 data-font>${doc.data().name}</h3>
                <p data-font>${user.email}</p>
            `
            nameWrapper.innerHTML = nameAndEmail


            
        })
        

        const accountModal = document.querySelectorAll('[data-modal]')
        // const accountModal = document.querySelector('.account-modal')
        const accountDetailsModal = document.querySelector('.account-details-container')
        const closeIt = document.querySelector('#closeIt')
        accountModal.forEach(i => {
        i.addEventListener('click', () => {
            accountDetailsModal.classList.toggle('modalAccActive')
        })
        })

        closeIt.addEventListener('click', () => {
        accountDetailsModal.classList.toggle('modalAccActive')
        })

        accountDetailsModal.addEventListener('click', (e) => {
        e.stopPropagation();
        if(e.target.classList.contains('account-details-container')){
            accountDetailsModal.classList.remove('modalAccActive')
        }

        })

        // const upload = document.querySelector('#save');
        // upload.addEventListener('click', (e) => {
        // e.preventDefault();
        // console.log(user.uid)
        // const storage = firebase.storage();
        // const storageRef = storage.ref();
        // var file = document.querySelector('#img').files[0]
        // var name = user.uid +'/profilePicture/'+file.name;

        // var metadata = {
        //     contentType: file.type,
            
        // }
        // // var user = firebase.auth().currentUser;
        // var uploadTask = storageRef.child(name).put(file, metadata)
        // uploadTask.then(snapshot => snapshot.ref.getDownloadURL())
        // .then(url => {
        //     console.log(url)
        //     document.querySelector('#displayPic').src = url
        //     document.querySelector('#img').value = ""
            
        // })
        // })
    }else{
        window.location.href = "/index.html"

    }
})
