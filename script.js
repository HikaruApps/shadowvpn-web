(function () {
  const cursor = document.getElementById("cursor");
  if (cursor && window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });

    document.querySelectorAll("a, button, .feature-card, .plan-card, .step, .faq-item, .donate-card").forEach((element) => {
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
  const copyButtons = document.querySelectorAll("[data-copy-wallet]");
  if (!copyButtons.length) return;

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.closest(".donate-card")?.querySelector(".wallet-address")?.textContent.trim();
      if (!value) return;

      try {
        await navigator.clipboard.writeText(value);
        const originalText = button.textContent;
        button.textContent = "Скопировано";
        button.classList.add("copied");

        window.setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove("copied");
        }, 1600);
      } catch {
        button.textContent = "Не скопировано";
      }
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
