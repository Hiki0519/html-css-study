const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll(".section-panel");

function setActive(sectionWord) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.word === sectionWord);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActive(link.dataset.word);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.dataset.section);
      }
    });
  },
  {
    rootMargin: "-38% 0px -48% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));
