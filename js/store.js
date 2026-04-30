window.KJStore = (() => {
  const paths = {
    site: "/data/site.json",
    sections: "/data/sections.json"
  };

  async function getJson(path) {
    const response = await fetch(path, {
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Could not load ${path}. Status: ${response.status}`);
    }

    return response.json();
  }

  async function load() {
    const [site, sections] = await Promise.all([
      getJson(paths.site),
      getJson(paths.sections)
    ]);

    return { site, sections };
  }

  return {
    load
  };
})();
