const accordion = document.querySelector('.accordion')
const bars = accordion.querySelectorAll('.bar')

bars.forEach(bar => bar.addEventListener('click', event => {
  const target = event.currentTarget
  const info = target.nextElementSibling.classList
  const parent = target.parentElement.classList
  const icon = target.children[1]

  info.toggle('show-info')
  parent.toggle('open-section')
  
  if (info.contains('show-info')) {
    icon.innerText = '-'
  } else {
    icon.innerText = '+'
  }
}))
