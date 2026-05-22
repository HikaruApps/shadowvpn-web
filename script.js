(function () {
  const cursor = document.getElementById("cursor");
  if (cursor && window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });

    document.querySelectorAll("a, button, .feature-card, .plan-card, .step, .faq-item").forEach((element) => {
      element.addEventListener("mouseenter", () => cursor.classList.add("big"));
      element.addEventListener("mouseleave", () => cursor.classList.remove("big"));
    });
  }
})();

(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

(function () {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  revealItems.forEach((item) => observer.observe(item));
})();
