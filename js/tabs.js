const tabbedComp = document.querySelector('.tabbed-component')
const tabs = tabbedComp.querySelectorAll('.tab')
const windows = tabbedComp.querySelectorAll('.window-component')

tabs.forEach(tab => tab.addEventListener('click', event => {
  const target = event.currentTarget
  const classes = target.classList

  if (classes.contains('tab-selected')) return

  tabs.forEach(tab => tab.classList.remove('tab-selected'))
  classes.add('tab-selected')

  windows.forEach(window => window.classList.remove('visible-window'))
  if (classes.contains('sword')) { windows[0].classList.add('visible-window') }
  if (classes.contains('bow')) { windows[1].classList.add('visible-window') }
  if (classes.contains('wizard')) { windows[2].classList.add('visible-window') }
}))
