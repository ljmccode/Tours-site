// set copyright date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

// toggle navbar
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// smooth scroll
const scrollLinks = document.querySelectorAll('.scoll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.classList.remove('show-links');

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  });
});
