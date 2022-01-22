// set copyright date
const date = document.getElementById('date').innerHTML = new Date().getFullYear();

// toggle navbar
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
})