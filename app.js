/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navigation = document.querySelectorAll('section')
const navList = document.getElementById('navbar__list')

/**
 * End Global Variables
 */

// Build menu by iterating through the navelements
navigation.forEach(al => {
  const navlistElement = `<li class='menu__link ${al.className}' data-link=${al.id}><a href="#${al.id}">${al.dataset.nav}</li>`
  navList.insertAdjacentHTML('beforeend', navlistElement)
})

// Scroll to section on link click by listenting to the click-event in the navlist
navList.addEventListener('click', act => {
  act.preventDefault()
  const parent = e.target.hasAttribute('data-link')
    ? act.target
    : act.target.parentElement
  const Scroll = document.getElementById(parent.dataset.link)
  Scroll.scrollIntoView({block: 'end', behavior: 'smooth'})
})

// Set section and nav link as active 
const callback = entries => {
  entries.forEach(entry => {
    const navListElement = document.querySelector(
      `.menu__link[data-link='${entry.target.id}']`,
    )
    const section = document.getElementById(entry.target.id)

    if (entry && entry.isIntersecting) {
      navListElement.classList.add('active')
      section.classList.add('active')
    } else {
      if (navListElement.classList.contains('active')) {
        navListElement.classList.remove('active')
      }

      if (section.classList.contains('active')) {
        section.classList.remove('active')
      }
    }
  })
}



// Setting an observer with options and a callback which checks if the navelement should be active

const observer = new IntersectionObserver(callback, options)
navElements.forEach(al => {
  observer.observe(document.getElementById(al.id))
})