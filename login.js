const createAcc = document.querySelector('#createAccount')
const modalContainer = document.querySelector('.create-account-modal-container')
const closeModal = document.querySelector('#close-modal')
createAcc.addEventListener('click', () => { 
    modalContainer.classList.toggle('modal-active')
})
closeModal.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-active')
})