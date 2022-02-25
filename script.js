///////////////////////////////////////////////////////////

// Make mobile navigation bar work
const btnNav = document.querySelector(".btn-mobile-navigation");
const header = document.querySelector(".section-header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("navigation-open");
});
//Sticky NavBar
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
// Fixing flexbox gap property missing in some Safari versions
