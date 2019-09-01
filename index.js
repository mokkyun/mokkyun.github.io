//Intersection Observer API for changing navbar on scroll

const header = document.querySelector("header");
const hero = document.querySelector("#hero");
const heroOptions = {
  rootMargin: "-500px 0px 0px 0px"
};
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scroll");
    } else {
      header.classList.remove("nav-scroll");
    }
  });
}, heroOptions);

observer.observe(hero);
