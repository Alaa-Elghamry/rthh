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

const navigation = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 */

// Build menu by iterating through the navelements
const navBuilder = () => {

  let navUI = '';
  // looping over all sections
  sections.forEach(section => {

      const sectionID = section.id;
      const sectionDataNav = section.dataset.nav;

      navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

  });
  // append all elements to the navigation
  navigation.innerHTML = navUI;
  const navBuilder = () => {

    let navUI = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;


};

navBuilder();


};

navBuilder();


// Set section and nav link as active 
const callback = daata => {
  daata.forEach(data => {
    const navListElement = document.querySelector(
      `.menu__link[data-link='${data.target.id}']`,
    )
    const section = document.getElementById(data.target.id)

    if (daata && daata.isIntersecting) {
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