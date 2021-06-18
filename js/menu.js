class MenuBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML= `
    <button class="menu-button"><span class="material-icons-round">menu</span><span class="material-icons-round arrow">east</span></button>
    <aside class="menu">
      <ul class="list">
        <li><a href="index.html">Home</a></li>
        <li><a href="accordion.html">Accordion</a></li>
        <li><a href="modal.html">Modal Window</a></li>
        <li><a href="tabs.html">Tabs</a></li>
        <li><a href="caroussel.html">Caroussel</a></li>
      </ul>
    </aside>
    `
  }
}

customElements.define('menu-bar', MenuBar)

const button = document.querySelector(".menu-button")

button.addEventListener('click', _ => { 
  const body = document.querySelector("body")
  const arrow = document.querySelector(".arrow")
  const isOpen = body.classList.contains("menu-active")

    body.classList.toggle("menu-active")

  if (isOpen) {
    arrow.innerText = "east"
  } else {
    arrow.innerText = "west"
  }
})
