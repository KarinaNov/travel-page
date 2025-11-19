const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target); // анимируется только один раз
      }
    });
  },
  {
    threshold: 0.15, // 15% видимости элемента
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));