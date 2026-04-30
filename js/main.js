(function () {
  function setupNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".primary-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      });
    });
  }

  function setupHeaderScroll() {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;

    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    });

    items.forEach((item) => observer.observe(item));
  }

  function setupFaq() {
    document.querySelectorAll(".faq-item").forEach((item, index) => {
      const button = item.querySelector(".faq-button");
      if (!button) return;

      if (index === 0) {
        item.classList.add("is-open");
      }

      button.addEventListener("click", () => {
        const isOpen = item.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function setCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  }

  function showJsonPreviewError(error) {
    console.error(error);

    const main = document.querySelector("#main");
    if (main) {
      main.insertAdjacentHTML("afterbegin", `
        <section class="section">
          <div class="container">
            <div class="card bento-card">
              <p class="eyebrow">Preview error</p>
              <h1>Content could not load.</h1>
              <p>Please run this site through a local server instead of opening index.html directly. Try: <code>python3 -m http.server 8080</code></p>
            </div>
          </div>
        </section>
      `);
    }
  }

  async function maybeRenderJsonHomepage() {
    const needsJsonRender = document.querySelector("[data-render]") || document.querySelector("[data-brand-name]");
    if (!needsJsonRender) return;

    if (!window.KJStore || !window.KJRender) {
      return;
    }

    try {
      const payload = await window.KJStore.load();
      window.KJRender.renderAll(payload);
    } catch (error) {
      showJsonPreviewError(error);
    }
  }

  async function init() {
    await maybeRenderJsonHomepage();
    setupNav();
    setupHeaderScroll();
    setupReveal();
    setupFaq();
    setCurrentYear();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
