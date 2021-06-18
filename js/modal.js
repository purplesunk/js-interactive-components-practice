const clickMe = document.querySelector('.click-me')
const modalWindow = document .querySelector('.modal-window')
const modalBackground = document.querySelector('.modal-window--background')
const close = modalWindow.querySelector('.close')
const accept = modalWindow.querySelector('.accept')

clickMe.addEventListener('click', _ => {
  modalWindow.classList.remove('isHidden')
  modalBackground.classList.remove('isHidden')
})

const addIsHidden = _ => {
  modalWindow.classList.add('isHidden')
  modalBackground.classList.add('isHidden')

  const button = event.currentTarget.classList
  if ( button.contains('accept') ) {
    console.log( 'thank you' )
  }
}

close.addEventListener('click', addIsHidden)
accept.addEventListener('click', addIsHidden)
