window.KJRender = (() => {
  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function setHref(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute("href", value);
    });
  }

  function renderMeta(site) {
    if (site.seo?.title) {
      document.title = site.seo.title;
    }

    const description = document.querySelector('meta[name="description"]');
    if (description && site.seo?.description) {
      description.setAttribute("content", site.seo.description);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && site.seo?.canonical) {
      canonical.setAttribute("href", site.seo.canonical);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && site.seo?.title) {
      ogTitle.setAttribute("content", site.seo.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && site.seo?.description) {
      ogDescription.setAttribute("content", site.seo.description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && site.seo?.canonical) {
      ogUrl.setAttribute("content", site.seo.canonical);
    }
  }

  function renderSiteBasics(site) {
    setText("[data-brand-name]", site.brand.name);
    setText("[data-brand-tagline]", site.brand.tagline);
    setHref("[data-primary-cta]", site.cta.href);

    document.querySelectorAll("[data-primary-cta]").forEach((element) => {
      element.textContent = site.cta.label;
    });

    setText("[data-hero-eyebrow]", site.hero.eyebrow);
    setText("[data-hero-title]", site.hero.title);
    setText("[data-hero-subtitle]", site.hero.subtitle);
    setText("[data-hero-note]", site.hero.note);
    setText("[data-footer-disclaimer]", site.disclaimer);
    setText("[data-current-year]", new Date().getFullYear());
  }

  function renderMetrics(metrics) {
    const target = document.querySelector("[data-snapshot-metrics]");
    if (!target) return;

    target.innerHTML = metrics.map((metric) => `
      <div class="metric-card">
        <span>${escapeHtml(metric.value)}</span>
        <p>${escapeHtml(metric.label)}</p>
      </div>
    `).join("");
  }

  function sectionHeading(section, centered = false) {
    return `
      <div class="section-heading ${centered ? "center" : ""} reveal">
        <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
        <h2>${escapeHtml(section.title)}</h2>
        <p>${escapeHtml(section.intro)}</p>
      </div>
    `;
  }

  function renderSnapshot(section) {
    return `
      <div class="snapshot-card card reveal">
        <div>
          <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.intro)}</p>
        </div>
        <ul class="snapshot-list">
          ${section.items.map((item) => `
            <li>
              <span class="check" aria-hidden="true">✓</span>
              <span>${escapeHtml(item)}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  }

  function renderServices(section) {
    return `
      ${sectionHeading(section)}
      <div class="bento-grid">
        ${section.items.map((item) => `
          <article class="card bento-card service-card reveal">
            <span class="icon-badge" aria-hidden="true">${escapeHtml(item.icon)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderProcess(section) {
    return `
      ${sectionHeading(section, true)}
      <div class="bento-grid">
        ${section.steps.map((step) => `
          <article class="card bento-card process-step reveal">
            <span class="step-number">${escapeHtml(step.number)}</span>
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.text)}</p>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderStandards(section) {
    return `
      <div class="standards-grid">
        <div class="section-heading reveal">
          <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.intro)}</p>
        </div>

        <div class="card standards-panel reveal">
          <ul class="standards-list">
            ${section.items.map((item) => `
              <li>
                <strong>${escapeHtml(item.title)}</strong>
                <span>${escapeHtml(item.text)}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  function renderFamily(section) {
    return `
      ${sectionHeading(section)}
      <div class="family-grid">
        ${section.team.map((member) => `
          <article class="card team-card reveal">
            <div class="role-pill">${escapeHtml(member.role)}</div>
            <h3>${escapeHtml(member.title)}</h3>
            <p>${escapeHtml(member.text)}</p>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderFaq(section) {
    return `
      ${sectionHeading(section, true)}
      <div class="faq-list">
        ${section.items.map((item, index) => `
          <article class="faq-item reveal">
            <h3>
              <button
                class="faq-button"
                type="button"
                aria-expanded="${index === 0 ? "true" : "false"}"
              >
                <span>${escapeHtml(item.question)}</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
            </h3>
            <div class="faq-panel">
              <div class="faq-panel-inner">
                <p>${escapeHtml(item.answer)}</p>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderFinalCta(section, site) {
    return `
      <div class="card final-cta reveal">
        <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
        <h2>${escapeHtml(section.title)}</h2>
        <p>${escapeHtml(section.text)}</p>
        <a class="button button-primary" href="${escapeHtml(site.cta.href)}">
          ${escapeHtml(site.cta.label)}
        </a>
      </div>
    `;
  }

  function renderSections(site, sections) {
    const map = {
      snapshot: () => renderSnapshot(sections.snapshot),
      services: () => renderServices(sections.services),
      process: () => renderProcess(sections.process),
      standards: () => renderStandards(sections.standards),
      family: () => renderFamily(sections.family),
      faq: () => renderFaq(sections.faq),
      finalCta: () => renderFinalCta(sections.finalCta, site)
    };

    document.querySelectorAll("[data-render]").forEach((target) => {
      const key = target.getAttribute("data-render");
      if (map[key]) {
        target.innerHTML = map[key]();
      }
    });
  }

  function renderAll(payload) {
    renderMeta(payload.site);
    renderSiteBasics(payload.site);
    renderMetrics(payload.site.metrics);
    renderSections(payload.site, payload.sections);
  }

  return {
    renderAll
  };
})();
