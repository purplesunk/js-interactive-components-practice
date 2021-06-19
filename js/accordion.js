const accordion = document.querySelector('.accordion')
const bars = accordion.querySelectorAll('.bar')

bars.forEach(bar => bar.addEventListener('click', event => {
  const target = event.currentTarget
  const info = target.nextElementSibling
  const parent = target.parentElement
  const icon = target.children[1]

  info.classList.toggle('show-info')
  
  const parentHeight = parent.clientHeight
  const infoHeight = info.clientHeight

  if (info.classList.contains('show-info')) {
    icon.innerText = '-'
    const newHeight = parentHeight + infoHeight
    parent.style.height = newHeight / 16 + "rem"
  } else {
    icon.innerText = '+'
    parent.style.height = "3rem"
  }


}))
