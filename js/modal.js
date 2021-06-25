const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close]')
const overlay = document.querySelector('#overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', _ => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', _ => {
    const modal = button.closest('.modal-window')
    closeModal(modal)
  })
})

const openModal = (modal) => {
  if (modal == null) return 
  modal.classList.add("active")
  overlay.classList.add("active")
}

const closeModal = (modal) => {
  if (modal == null) return 
  modal.classList.remove("active")
  overlay.classList.remove("active")
}
