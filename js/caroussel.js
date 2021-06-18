const carousel = document.querySelector('.carousel')
const photos = carousel.querySelector('.photos')
const buttons = carousel.querySelectorAll('button')
const indicators = document.querySelector('.indicators').children

buttons.forEach(button => button.addEventListener('click', event => {
  const targetClass = event.currentTarget.classList
  const photosClass = photos.classList
  
  if (targetClass.contains('left')) {
    if (photosClass.contains('show-second')) {
      photosClass.remove('show-second') 
      changeIndicator(1, 0)
    } else if (photosClass.contains('show-third')) {
      photosClass.remove('show-third')
      photosClass.add('show-second')
      changeIndicator(2, 1)
    } else {
      photosClass.add('show-third')
      changeIndicator(0, 2)
    }
  }

  if (targetClass.contains('right')) {
    if (photosClass.contains('show-third')) {
      photosClass.remove('show-third')
      changeIndicator(2, 0)
    } else if (photosClass.contains('show-second')) {
      photosClass.add('show-third')
      photosClass.remove('show-second')
      changeIndicator(1, 2)
    } else {
      photosClass.add('show-second')
      changeIndicator(0, 1)
    }
  }
}))

const changeIndicator = (num1, num2) => {
  indicators[num1].classList.remove('selected')
  indicators[num2].classList.add('selected')
}
