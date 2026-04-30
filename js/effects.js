(function () {
  function addScrollProgress() {
    if (document.querySelector(".scroll-progress")) return;

    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    progress.innerHTML = '<span class="scroll-progress__bar"></span>';
    document.body.prepend(progress);

    const bar = progress.querySelector(".scroll-progress__bar");

    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      bar.style.width = `${percent}%`;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function setLoadedState() {
    window.requestAnimationFrame(() => {
      document.body.classList.add("is-loaded");
    });
  }

  function setCurrentNavItem() {
    const path = window.location.pathname.replace(/\/$/, "");
    const current = path.split("/").pop() || "index";

    document.querySelectorAll(".primary-nav a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const normalizedHref = href.replace(".html", "").replace(/^\//, "");

      if (
        (current === "" && normalizedHref === "index") ||
        (current === "index" && normalizedHref === "index") ||
        normalizedHref === current
      ) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupSpotlight() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const targets = document.querySelectorAll(".hero, .page-hero, .section-muted, .bento-card, .detail-card, .profile-feature-card, .apply-panel");

    targets.forEach((target) => {
      target.addEventListener("pointermove", (event) => {
        const rect = target.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        target.style.setProperty("--motion-spotlight-x", `${x}%`);
        target.style.setProperty("--motion-spotlight-y", `${y}%`);
      });
    });
  }

  function init() {
    addScrollProgress();
    setLoadedState();
    setCurrentNavItem();
    setupSpotlight();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
