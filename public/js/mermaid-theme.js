// Renders mermaid diagrams using a theme that matches the site's color scheme
// and re-renders them whenever the color scheme changes.
(function () {
  if (typeof mermaid === 'undefined') return;

  const diagrams = document.querySelectorAll('.mermaid-diagram');
  if (diagrams.length === 0) return;

  function render() {
    const dark = document.body.classList.contains('colorscheme-dark');
    mermaid.initialize({ startOnLoad: false, theme: dark ? 'dark' : 'default' });

    diagrams.forEach((diagram) => {
      const source = diagram.querySelector('.mermaid-source').textContent;
      const output = diagram.querySelector('.mermaid-output');
      output.removeAttribute('data-processed');
      output.textContent = source;
      mermaid.init(undefined, output);
    });
  }

  render();
  document.addEventListener('themeChanged', render);
})();
